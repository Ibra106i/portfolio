import { Sprout } from "lucide-react";

export default function BotanicalDivider() {
  return (
    <div aria-hidden="true" className="container-frame">
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-secondary/40" />
        <Sprout className="h-4 w-4 text-secondary/60" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-secondary/40" />
      </div>
    </div>
  );
}
