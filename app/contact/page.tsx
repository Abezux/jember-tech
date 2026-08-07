import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact | Jember Tech",
  description: "Get in touch with Jember Tech to build something secure together.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Suspense fallback={<div className="pt-40 pb-20 min-h-screen flex items-center justify-center">Loading...</div>}>
        <ContactClient />
      </Suspense>
      <Footer />
    </main>
  );
}
