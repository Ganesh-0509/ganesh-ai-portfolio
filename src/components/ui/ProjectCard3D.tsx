import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProjectCard3DProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function ProjectCard3D({ children, className, gradient }: ProjectCard3DProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: y / 20, y: -x / 20 });
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setRotate({ x: 0, y: 0 });
        setIsHovering(false);
      }}
      animate={{ 
        rotateX: rotate.x, 
        rotateY: rotate.y,
        scale: isHovering ? 1.02 : 1
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={cn(
        "card-3d rounded-2xl overflow-hidden",
        gradient && `bg-gradient-to-br ${gradient}`,
        className
      )}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
