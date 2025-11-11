"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
      <div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          disabled={status === "loading"}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border/40 rounded text-[13px] sm:text-[14px] text-foreground placeholder:text-muted-foreground focus:border-border focus:outline-none transition-colors disabled:opacity-50"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          disabled={status === "loading"}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border/40 rounded text-[13px] sm:text-[14px] text-foreground placeholder:text-muted-foreground focus:border-border focus:outline-none transition-colors disabled:opacity-50"
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          disabled={status === "loading"}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border/40 rounded text-[13px] sm:text-[14px] text-foreground placeholder:text-muted-foreground focus:border-border focus:outline-none resize-none transition-colors disabled:opacity-50"
        />
      </div>

      {status === "error" && (
        <p className="text-[12px] sm:text-[13px] text-red-500">{errorMessage}</p>
      )}

      {status === "success" && (
        <p className="text-[12px] sm:text-[13px] text-green-500">Message sent successfully! I'll get back to you soon.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-foreground text-background text-[13px] sm:text-[14px] font-normal rounded hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

