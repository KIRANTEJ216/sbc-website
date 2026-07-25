"use client";

import { useState } from "react";

export default function MemberLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-full bg-canvas flex items-center justify-center px-4 py-20">
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

        <form action="https://app.sbconnect.in" method="POST" className="relative glass rounded-[1.75rem] p-5 sm:p-8 border border-border/60 space-y-5 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
          <div>
            <label className="block text-xs font-heading font-semibold text-text-primary mb-1.5 tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-canvas border border-border/60 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-heading font-semibold text-text-primary mb-1.5 tracking-wider">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-canvas border border-border/60 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors"
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border/60 text-accent focus:ring-accent/20" />
              <span className="text-xs text-text-muted">Remember me</span>
            </label>
            <a href="https://app.sbconnect.in/forgot-password" className="text-xs text-accent hover:text-accent-hover transition-colors">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-accent to-accent-hover text-white text-sm font-heading font-semibold tracking-wider hover:brightness-110 transition-all shadow-lg shadow-accent/20"
          >
            Sign In
          </button>

          <p className="text-xs text-text-muted text-center">
            New member?{" "}
            <a
              href="https://app.sbconnect.in/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}