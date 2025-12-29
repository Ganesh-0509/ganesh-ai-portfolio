"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "./button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  gradient: string;
  github: string;
  demo: string | null;
  content?: string;
}

interface ExpandableProjectCardProps {
  projects: Project[];
}

export function ExpandableProjectCards({ projects }: ExpandableProjectCardProps) {
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[60] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-card rounded-full h-8 w-8 z-10"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4" />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-card rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-64 object-cover object-top"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${active.gradient} opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </motion.div>

              <div className="p-6 flex-1 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-muted-foreground mt-2"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={active.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {active.demo && (
                      <Button size="sm" asChild>
                        <a href={active.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Extended Content */}
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  {active.content || (
                    <p>
                      This project showcases expertise in {active.tech.slice(0, 3).join(", ")} and more.
                      Built with modern best practices and a focus on user experience.
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Grid of Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={project.title}
            onClick={() => setActive(project)}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <motion.div layoutId={`image-${project.title}-${id}`} className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </motion.div>

            <div className="p-5 flex items-center justify-between">
              <motion.h3
                layoutId={`title-${project.title}-${id}`}
                className="font-bold text-xl group-hover:text-primary transition-colors"
              >
                {project.title}
              </motion.h3>
              <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view details →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
