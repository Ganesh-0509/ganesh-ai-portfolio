import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroFloatingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 80;
      const y = (e.clientY - window.innerHeight / 2) / 80;

      gsap.to(".layer-1", { x: x * 5, y: y * 5, duration: 0.8, ease: "power2.out" });
      gsap.to(".layer-2", { x: x * 10, y: y * 10, duration: 0.8, ease: "power2.out" });
      gsap.to(".layer-3", { x: x * 20, y: y * 20, duration: 0.8, ease: "power2.out" });
      gsap.to(".layer-4", { x: x * 15, y: y * 15, duration: 0.8, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary cyan glow */}
      <div className="layer-1 absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
      
      {/* Secondary indigo glow */}
      <div className="layer-2 absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/15 blur-[120px] rounded-full" />
      
      {/* Accent purple glow */}
      <div className="layer-3 absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent/10 blur-[80px] rounded-full" />
      
      {/* Subtle pink accent */}
      <div className="layer-4 absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full" />
    </div>
  );
}
