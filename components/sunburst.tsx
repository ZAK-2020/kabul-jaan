type SunburstProps = {
  className?: string;
};

export function Sunburst({ className = "" }: SunburstProps) {
  const rays = Array.from({ length: 9 }, (_, index) => {
    const angle = -40 + index * 10;
    return (
      <line
        key={angle}
        x1="20"
        y1="20"
        x2="20"
        y2="4"
        transform={`rotate(${angle} 20 20)`}
      />
    );
  });

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 24"
      className={`h-6 w-10 stroke-kj-accent ${className}`}
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      {rays}
      <path d="M4 20a16 16 0 0 1 32 0" />
    </svg>
  );
}
