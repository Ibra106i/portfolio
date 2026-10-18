const fireflies = [
  { top: "22%", left: "12%", delay: "0s", duration: "13s" },
  { top: "38%", left: "85%", delay: "1.5s", duration: "16s" },
  { top: "62%", left: "8%", delay: "3s", duration: "14s" },
  { top: "18%", left: "55%", delay: "2s", duration: "17s" },
  { top: "70%", left: "72%", delay: "4s", duration: "15s" },
  { top: "48%", left: "30%", delay: "5s", duration: "18s" },
  { top: "80%", left: "45%", delay: "1s", duration: "13.5s" },
  { top: "30%", left: "68%", delay: "6s", duration: "16.5s" },
];

export default function BackgroundGarden() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#2E7D52]/25 blur-3xl" />
      <div className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#1A5E40]/30 blur-3xl" />
      <div className="absolute -right-40 top-2/3 h-[30rem] w-[30rem] rounded-full bg-[#1F5F3F]/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[40rem] rounded-full bg-[#134E35]/40 blur-3xl" />
      {fireflies.map((firefly) => (
        <span
          key={`${firefly.top}-${firefly.left}`}
          className="absolute h-1.5 w-1.5 animate-firefly-float rounded-full bg-primary/70 blur-[1px]"
          style={{
            top: firefly.top,
            left: firefly.left,
            animationDelay: firefly.delay,
            animationDuration: firefly.duration,
          }}
        >
          <span
            className="absolute inset-0 animate-firefly-pulse rounded-full bg-primary"
            style={{ animationDelay: firefly.delay }}
          />
        </span>
      ))}
    </div>
  );
}
