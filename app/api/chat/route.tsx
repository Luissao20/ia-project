import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use the environment variable here
});

export async function POST(req: Request) {
  try {
    const { message, threadId } = await req.json();

    const assistant = await openai.beta.assistants.retrieve(
      "asst_Kqm38RC1jHArIlZDmtgMd5O5"
    );

    // Use existing thread or create new one
    const thread = threadId 
      ? await openai.beta.threads.retrieve(threadId)
      : await openai.beta.threads.create();

    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    const run = openai.beta.threads.runs.stream(thread.id, {
      assistant_id: assistant.id,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        let fullResponse = '';
        
        run.on("textDelta", (textDelta) => {
          fullResponse += textDelta.value;
          controller.enqueue(encoder.encode(textDelta.value));
        });

        run.on("end", () => {
          console.log("Full response received:", fullResponse);
          // Send thread ID at the end of the response
          controller.enqueue(encoder.encode(`\nTHREAD_ID:${thread.id}`));
          controller.close();
        });

        run.on("error", (error) => {
          controller.error(error);
        });
      },
    });

    return new Response(stream);
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}