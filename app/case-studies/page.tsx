import { Suspense } from "react";
import Contenido from "./components/contenido";
import Cta from "./components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Learn how Agentify's Now is helping businesses streamline workflows, reduce costs, and improve team productivity" 
}

export default function CaseStudies() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Contenido />
      </Suspense>
      <div className="bg-[#f0f4f8] py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1c5a6c]">Subscribe to our Blog</h3>
            <p className="mt-2 text-lg text-gray-600">Get the latest updates and news directly in your inbox.</p>
          </div>
          <form className="mt-8 sm:flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1c5a6c] focus:border-transparent"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-6 py-2 bg-[#1c5a6c] text-white font-semibold rounded-md hover:bg-[#164a56] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c5a6c]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <Cta />
    </>
  );
}