"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/lib/services-data";
import { Input } from "@/components/ui/input";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit contact form");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-40 pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-container-margin grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column */}
        <div>
          <h1 className="text-display-lg mb-8 leading-[1.05]">Let&apos;s Build Something<br />Secure Together</h1>
          <p className="text-[18px] leading-[1.6] text-on-surface-variant mb-12">
            Whether you need a complete digital transformation, a scalable web application, or enterprise-grade security, our team is ready to deliver.
          </p>
          
          <div className="glass-card hairline-border rounded-card p-8">
            <h5 className="text-primary font-label-bold mb-8 uppercase tracking-widest text-xs">Contact Information</h5>
            <ul className="space-y-6">
              <li className="text-on-surface-variant">Bole, Addis Ababa, Ethiopia</li>
              <li className="text-on-surface-variant">+251 900 000 000</li>
              <li className="text-on-surface-variant">hello@jembertech.com</li>
            </ul>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="glass-card hairline-border rounded-card p-10 h-fit">
          {submitted ? (
            <div className="py-12 text-center text-on-surface-variant">
              <h3 className="text-2xl text-primary mb-4">Message Received</h3>
              <p>Thanks for reaching out, we&apos;ll be in touch shortly!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="text-xs font-label-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Name *</label>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-black/20 border-white/10 text-on-surface placeholder:text-on-surface-variant/50 h-12"
                />
              </div>
              
              <div>
                <label className="text-xs font-label-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Email *</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-black/20 border-white/10 text-on-surface placeholder:text-on-surface-variant/50 h-12"
                />
              </div>
              
              <div>
                <label className="text-xs font-label-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Company</label>
                <Input
                  name="company"
                  placeholder="Your Company (Optional)"
                  className="bg-black/20 border-white/10 text-on-surface placeholder:text-on-surface-variant/50 h-12"
                />
              </div>

              <div>
                <label className="text-xs font-label-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Service Interest</label>
                <select 
                  name="service"
                  defaultValue={initialService}
                  className="w-full bg-black/20 border border-white/10 text-on-surface rounded-md h-12 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="" className="bg-surface text-on-surface">General Inquiry</option>
                  {services.map(s => (
                    <option key={s.slug} value={s.slug} className="bg-surface text-on-surface">{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-label-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Budget Range</label>
                <select 
                  name="budget"
                  className="w-full bg-black/20 border border-white/10 text-on-surface rounded-md h-12 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="" className="bg-surface text-on-surface">Not sure yet</option>
                  <option value="Under $5k" className="bg-surface text-on-surface">Under $5k</option>
                  <option value="$5k-$15k" className="bg-surface text-on-surface">$5k-$15k</option>
                  <option value="$15k+" className="bg-surface text-on-surface">$15k+</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-label-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Message *</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 text-on-surface placeholder:text-on-surface-variant/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary py-4 mt-2 w-full disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
