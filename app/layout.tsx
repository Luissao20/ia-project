import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ClientComponent from "./clientComponent";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Head from "next/head";

const geistSans = Rubik({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Agentify.AI",
  description: "Agentify's AI automation solutions, including AI agents and chatbots, help businesses streamline workflows, reduce costs, and improve team productivity—all tailored to fit your growth strategy.",
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
        <Footer />
      </body>
    </html>
  );
}
