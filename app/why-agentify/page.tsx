import Intro from "./components/intro";
import Features from "./components/features";
import NextStep from "./components/next-step";
import Comparison from "./components/comparison";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Agentify",
  description: "Discover how Agentify Now is making a difference in the new era of AI Automations"
} 

export default function WhyAgentify() {
  return (
    <>
      <Intro />
      <Features />
      <Comparison />
      <NextStep />
    </>
  );
}