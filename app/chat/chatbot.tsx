"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface PresetMessage {
  label: string;
  message: string;
}

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const presetMessages: PresetMessage[] = [
    {
      label: "About us",
      message: "Please tell me about AgentifyNow.AI"
    },
    {
      label: "Contact Information",
      message: "How can I get in touch with AgentifyNow.AI's team?"
    },
    {
      label: "Services",
      message: "What services does AgentifyNow.AI offer?"
    }
  ];

  const handlePresetMessage = (preset: PresetMessage) => {
    setMessage(preset.message);
    sendMessage(preset.message);
  };

  const sendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage || message;
    if (!messageToSend.trim()) return;
    setLoading(true);

    // Add user message to chat
    const userMessage: Message = { role: 'user', content: messageToSend };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setMessage("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: messageToSend,
          threadId: threadId 
        }),
      });

      if (!res.ok) throw new Error(res.statusText);

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("No reader available");

      let assistantMessage = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log("Chat response fully received:", assistantMessage);
          break;
        }

        const chunk = decoder.decode(value);
        
        // Check if the chunk contains the thread ID
        if (chunk.includes('THREAD_ID:')) {
          const [messageContent, threadIdPart] = chunk.split('THREAD_ID:');
          setThreadId(threadIdPart.trim());
          assistantMessage += messageContent;
        } else {
          assistantMessage += chunk;
        }

        // Update the assistant's message in real-time
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          
          if (lastMessage && lastMessage.role === 'assistant') {
            newMessages[newMessages.length - 1] = {
              ...lastMessage,
              content: assistantMessage
            };
          } else {
            newMessages.push({
              role: 'assistant',
              content: assistantMessage
            });
          }
          
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#03A7B3] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#345D87] transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
        </button>
      ) : (
        <div className="fixed md:relative right-4 bottom-4 w-[calc(100%-32px)] md:w-[400px] h-[600px] flex flex-col bg-white rounded-lg shadow-xl border border-[#03A7B3]/20">
          <div className="p-4 border-b border-[#03A7B3]/20 flex justify-between items-center bg-gradient-to-r from-[#03A7B3]/5 to-transparent">
            <div className="flex items-center gap-2">
              <Image
                src="/logos/logochat.png"
                alt="Chat Assistant Logo"
                width={44}
                height={44}
                className="rounded-full"
              />
              <h2 className="text-lg font-semibold text-[#010817]">Assistify</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-[#03A7B3]/10 rounded-full transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#345D87"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="flex flex-col gap-2 items-end">
                {presetMessages.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => handlePresetMessage(preset)}
                    className="inline-block px-4 py-2 text-left rounded-lg hover:bg-[#03A7B3]/5 border border-[#03A7B3]/20 transition-colors bg-white text-[#010817] cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.role === 'user' 
                    ? 'justify-end' 
                    : 'justify-start'
                }`}
              >
                <div
                  className={`p-3 rounded-lg inline-block ${
                    msg.role === 'user' 
                      ? 'bg-[#03A7B3] text-white' 
                      : 'bg-[#345D87]/10 text-[#010817]'
                  }`}
                >
                  {msg.role === 'assistant' ? (
                    <div className="whitespace-pre-wrap">
                      {msg.content.split('\n').map((line, i) => {
                        // Format lines that contain colons
                        if (line.includes(':')) {
                          const colonIndex = line.indexOf(':');
                          const title = line.substring(0, colonIndex);
                          const content = line.substring(colonIndex + 1);
                          
                          // Format both bold text and links
                          const formattedLine = `${title}:${content}`
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(
                              /\[(.*?)\]\((.*?)\)/g, 
                              '<a href="$2" target="_blank" class="text-blue-500 hover:underline">$1</a>'
                            );
                          
                          return (
                            <div key={i} className="mb-2" 
                              dangerouslySetInnerHTML={{ __html: formattedLine }} 
                            />
                          );
                        }
                        
                        // Format bullet points (both - and •)
                        if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
                          const bulletContent = line.trim().substring(1);
                          const formattedBullet = bulletContent
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(
                              /\[(.*?)\]\((.*?)\)/g, 
                              '<a href="$2" target="_blank" class="text-blue-500 hover:underline">$1</a>'
                            );
                          return (
                            <div key={i} className="ml-4 mb-2">
                              • <span dangerouslySetInnerHTML={{ __html: formattedBullet }} />
                            </div>
                          );
                        }

                        // Format numbered lists
                        const numberMatch = line.match(/^\d+\./);
                        if (numberMatch) {
                          const numberContent = line.substring(numberMatch[0].length);
                          const formattedNumber = numberContent.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong>$1</strong>'
                          );
                          return (
                            <div key={i} className="mb-2">
                              {numberMatch[0]} <span dangerouslySetInnerHTML={{ __html: formattedNumber }} />
                            </div>
                          );
                        }

                        // Format headers (lines starting with ###)
                        if (line.trim().startsWith('###')) {
                          const headerContent = line.trim().substring(3);
                          return (
                            <h3 key={i} className="text-xl font-bold mb-2 mt-4">
                              {headerContent}
                            </h3>
                          );
                        }

                        // Format regular lines
                        const formattedLine = line
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(
                            /\[(.*?)\]\((.*?)\)/g, 
                            '<a href="$2" target="_blank" class="text-blue-500 hover:underline">$1</a>'
                          );
                        return (
                          <div key={i} className="mb-2" 
                            dangerouslySetInnerHTML={{ __html: formattedLine }} 
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-[#03A7B3]/20 bg-gradient-to-r from-[#03A7B3]/5 to-transparent">
            <div className="flex space-x-2 items-center">
              <textarea
                className="flex-1 px-3 py-2 border border-[#03A7B3]/20 rounded-lg focus:ring-2 focus:ring-[#03A7B3] focus:border-[#03A7B3] resize-none bg-white text-[#010817] placeholder-[#010817]/50 h-10"
                placeholder="You can write your own question too!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
              />
              <button
                className="px-4 py-2 text-white bg-[#03A7B3] rounded-lg hover:bg-[#345D87] transition-colors disabled:opacity-50 disabled:hover:bg-[#03A7B3] h-10 cursor-pointer"
                onClick={() => sendMessage()}
                disabled={loading}
              >
                {loading ? "..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}