import ContactForm from "./components/contact-form";
import SupportInformation from "./components/support-information";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us to learn more about our AI automation solutions"
}

export default function Contact() {
  return (
    <>
      <ContactForm />
      <SupportInformation />
    </>
  );
}