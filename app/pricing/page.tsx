import PricingTiers from "./components/pricing-tiers";
import PricingFAQ from "./components/pricing-faq";
import PricingCTA from "./components/pricing-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the right pricing plan for your business and start automating your workflows today"
}

export default function Pricing() {
  return (
    <>
      <PricingTiers />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}