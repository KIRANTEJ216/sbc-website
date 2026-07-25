export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="logo-grad-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>

      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx="24"
        stroke="url(#logo-grad)"
        strokeWidth="3"
        fill="url(#logo-grad)"
        fillOpacity="0.04"
      />

      <rect
        x="12"
        y="12"
        width="96"
        height="96"
        rx="18"
        fill="url(#logo-grad)"
        fillOpacity="0.06"
      />

      <path
        d="M38 44C38 36 42 32 50 32H58C66 32 70 36 70 40C70 44 68 48 60 48H52C46 48 44 50 44 54C44 58 46 60 52 60H58"
        stroke="url(#logo-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 60C56 60 58 62 58 66V70C58 74 56 78 50 78H42"
        stroke="url(#logo-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M72 78L82 42"
        stroke="url(#logo-grad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M72 78L92 78"
        stroke="url(#logo-grad-light)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M76 60H90"
        stroke="url(#logo-grad-light)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}