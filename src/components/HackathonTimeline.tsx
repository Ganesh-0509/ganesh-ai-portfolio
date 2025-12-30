import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

import intelHackathon from '@/assets/intel-hackathon.png';
import voidV1Hackathon from '@/assets/void-v1-hackathon.png';
import nxtwaveHackathon from '@/assets/nxtwave-hackathon.png';

const hackathons = [
  {
    title: 'Intel AI Hackathon',
    role: 'Winner',
    year: '2025',
    icon: Trophy,
    description: 'First place in Intel\'s prestigious AI hackathon, demonstrating excellence in AI innovation.',
    image: intelHackathon,
    highlight: true,
  },
  {
    title: 'VOID V1 (VIT Chennai)',
    role: '3rd Place',
    year: '2025',
    icon: Award,
    description: 'Secured third position at VIT Chennai\'s hackathon, showcasing technical prowess.',
    image: voidV1Hackathon,
    highlight: false,
  },
  {
    title: 'NxtWave x OpenAI Buildathon',
    role: 'Finalist',
    year: '2025',
    icon: Medal,
    description: 'Selected as a finalist among hundreds of participants for building innovative AI solutions.',
    image: nxtwaveHackathon,
    highlight: true,
  },
];

export function HackathonTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="hackathons" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hackathons & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A journey of innovation and competitive excellence
            </p>
          </motion.div>

          {/* Timeline */}
          <div ref={containerRef} className="relative">
            {/* Center Line - Background */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border/30" />
            
            {/* Center Line - Animated Progress */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/50 origin-top"
              style={{ height: lineHeight }}
            />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={cn(
                    "relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center",
                    index % 2 === 0 ? "md:text-right" : "md:text-left md:direction-rtl"
                  )}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center border-4 border-background shadow-lg",
                        hackathon.highlight 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-card text-foreground"
                      )}
                    >
                      <hackathon.icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Content - Left or Right */}
                  <div className={cn(
                    "md:col-span-1",
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:col-start-2"
                  )}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={cn(
                        "glass-card rounded-2xl overflow-hidden transition-all duration-300",
                        hackathon.highlight && "ring-2 ring-primary/30"
                      )}
                    >
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={hackathon.image} 
                          alt={hackathon.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                        
                        {/* Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span className={cn(
                            'px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm',
                            hackathon.role === 'Winner' && 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
                            hackathon.role === 'Finalist' && 'bg-primary/20 text-primary border border-primary/30',
                            hackathon.role === '3rd Place' && 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                          )}>
                            {hackathon.role}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 text-left direction-ltr">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg">{hackathon.title}</h3>
                          <span className="text-xs text-muted-foreground font-mono">{hackathon.year}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {hackathon.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={cn(
                    "hidden md:block",
                    index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                  )} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
