"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brass/30 bg-paper-dim p-10 text-center">
        <p className="font-display text-xl font-bold text-ink">Message sent</p>
        <p className="mt-2 text-sm text-ink-soft">
          Thank you for reaching out. A member of the Zimplow team will be in touch shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-brass-dark hover:text-brass"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="font-display text-xs font-semibold uppercase tracking-wide text-stone">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-brass"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-display text-xs font-semibold uppercase tracking-wide text-stone">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-brass"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-display text-xs font-semibold uppercase tracking-wide text-stone">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-lg border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-brass"
          placeholder="How can we help?"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-ink px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-brass disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Contact Us"}
      </button>
    </form>
  );
}
