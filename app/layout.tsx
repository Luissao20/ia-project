import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ClientComponent from "./clientComponent";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Head from "next/head";
import Chatbot from "./chat/chatbot";

const geistSans = Rubik({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentifynow.ai/"),
  //title: "AgentifyNow.AI | AI automation solutions AI agents and Chatbots",
  title: {
    default: "AgentifyNow.AI - AI automation solutions AI agents and Chatbots",
    template: "%s | AgentifyNow.AI - AI automation solutions AI agents and Chatbots"
  },
  description: "Agentify's now AI automation solutions, including AI agents and chatbots, help businesses streamline workflows, reduce costs, and improve team productivity—all tailored to fit your growth strategy",
  openGraph: { 
    title: "AgentifyNow.AI | AI automation solutions AI agents and Chatbots",
    description: "Agentify's now AI automation solutions, including AI agents and chatbots, help businesses streamline workflows, reduce costs, and improve team productivity—all tailored to fit your growth strategy",
    type: "website",
    locale: "en_US",
    url: "https://agentifynow.ai",
    siteName: "AgentifyNow.AI",
    images: [
      {
        url: "/logos/New-Logo2.png",
        width: 1200,
        height: 630,
        alt: "AgentifyNow.AI | AI automation solutions AI agents and Chatbots",
      }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify("datos-seo.json")}}></script>
      </Head>
      <body
        className={`${geistSans.className} antialiased`}
      >
        <ClientComponent />
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
