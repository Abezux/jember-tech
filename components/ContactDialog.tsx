"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function ContactDialog({ children }: { children: React.ReactElement }) {
  const [open, setOpen] = useState(false);
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
        console.error("Failed to submit form");
        // Optionally handle error state here
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setTimeout(() => setSubmitted(false), 300); // reset after closing animation
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={children} />
      <DialogContent className="bg-surface hairline-border rounded-card border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-2 text-primary">
            {submitted ? "Message Received" : "Get In Touch"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center text-on-surface-variant">
            <p>Thanks, we'll be in touch shortly!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-black/20 border-white/10 text-on-surface placeholder:text-on-surface-variant/50"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="bg-black/20 border-white/10 text-on-surface placeholder:text-on-surface-variant/50"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="How can we help you?"
                required
                rows={4}
                className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary px-6 py-3 mt-4 w-full disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
