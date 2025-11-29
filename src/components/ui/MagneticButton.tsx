import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  asChild?: boolean;
}

export function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) / 4,
      y: (e.clientY - rect.top - rect.height / 2) / 4,
    });
  }

  return (
    <motion.button
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onClick={onClick}
      className={cn(
        "magnetic-btn px-6 py-3 rounded-full font-semibold shadow-lg transition-shadow duration-300",
        "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
        "hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
