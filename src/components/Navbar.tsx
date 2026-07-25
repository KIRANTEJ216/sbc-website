"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass" style={{ height: "64px" }}>
      <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 h-full">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-glow shrink-0">
            <span className="text-white font-bold text-sm tracking-tight">SB</span>
          </div>
          <span className="font-heading font-bold text-lg text-text-primary">
            SB <span className="text-text-muted font-normal">Connect</span>
          </span>
        </Link>

        <span className="text-text-muted text-xs tracking-wider uppercase font-medium hidden sm:block">
          Hover tabs on the left
        </span>
      </div>
    </nav>
  );
}