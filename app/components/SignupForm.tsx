"use client";

import { useState } from "react";

interface SignupFormProps {
  initialCount: number;
}

export default function SignupForm({ initialCount }: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(initialCount);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus("error");
      setMessage(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setCount(data.count);
    setMessage("You're on the list! We'll be in touch soon.");
    setEmail("");
  }

  return (
    <div className="signup-block">
      {status === "success" ? (
        <div className="success-state">
          <span className="success-icon">✓</span>
          <p className="success-message">{message}</p>
          <p className="signup-count">
            You're one of <strong>{count.toLocaleString()}</strong> people already signed up.
          </p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
            />
            <button
              type="submit"
              className="cta-button"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Joining..." : "Get Early Access"}
            </button>
          </form>
          {message && <p className="error-message">{message}</p>}
          {count > 0 && (
            <p className="signup-count">
              Join <strong>{count.toLocaleString()}</strong>{" "}
              {count === 1 ? "person" : "people"} already on the waitlist.
            </p>
          )}
        </>
      )}
    </div>
  );
}
