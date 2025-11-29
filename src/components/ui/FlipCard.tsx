import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  return (
    <div className={cn("group perspective cursor-pointer", className)}>
      <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          {front}
        </div>
        {/* Back */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          {back}
        </div>
      </div>
    </div>
  );
}
