"use client";

import { useState, useCallback } from "react";

export default function MemberLogin() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(() => {
    setLoading(true);
    window.location.href = "https://app.sbconnect.in/login";
  }, []);

  return (
    <div className="min-h-[80vh] sm:min-h-screen bg-canvas flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Member Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
            Welcome <span className="gradient-text">Back</span>
          </h2>
          <p className="text-text-secondary text-sm">
            Sign in to access exclusive member resources and network
          </p>
        </div>

        <div className="relative glass rounded-[1.25rem] sm:rounded-[1.75rem] p-5 sm:p-8 border border-border/60 space-y-4 sm:space-y-5 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent/40 via-accent to-accent/40" />

          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm mb-6 max-w-xs mx-auto">
              You&apos;ll be redirected to the member portal to sign in securely.
            </p>
            <button
              onClick={handleSignIn}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-accent to-accent-hover text-white text-sm font-heading font-semibold tracking-wider hover:brightness-110 transition-all shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Redirecting..." : "Go to Member Portal"}
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span className="h-px flex-1 bg-border/60" />
            <span>or</span>
            <span className="h-px flex-1 bg-border/60" />
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="https://app.sbconnect.in/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-border/60 text-text-primary text-sm font-heading font-medium text-center hover:bg-accent/5 hover:border-accent/20 transition-all"
            >
              Create New Account
            </a>
            <a
              href="https://app.sbconnect.in/forgot-password"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:text-accent-hover text-center transition-colors py-1"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}