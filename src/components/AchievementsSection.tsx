import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Trophy, Medal, Award } from 'lucide-react';
import { FlipCard } from '@/components/ui/FlipCard';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import intelHackathon from '@/assets/intel-hackathon.png';
import voidV1Hackathon from '@/assets/void-v1-hackathon.png';
import nxtwaveHackathon from '@/assets/nxtwave-hackathon.png';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: 'Intel AI Hackathon',
    role: 'Winner',
    year: '2025',
    icon: Trophy,
    description: 'First place in Intel\'s prestigious AI hackathon, demonstrating excellence in AI innovation.',
    highlight: true,
    image: intelHackathon,
  },
  {
    title: 'VOID V1 (VIT Chennai)',
    role: '3rd Place',
    year: '2025',
    icon: Award,
    description: 'Secured third position at VIT Chennai\'s hackathon, showcasing technical prowess.',
    highlight: false,
    image: voidV1Hackathon,
  },
  {
    title: 'NxtWave x OpenAI Buildathon',
    role: 'Finalist',
    year: '2025',
    icon: Medal,
    description: 'Selected as a finalist among hundreds of participants for building innovative AI solutions.',
    highlight: true,
    image: nxtwaveHackathon,
  },
];

const certifications = [
  'Oracle Java SE 21 Developer Professional — Oracle (Nov 2025)',
  '5-Day GenAI Intensive — Kaggle (Jan 2025)',
  'Build Real World AI Applications with Gemini and Imagen — Google Cloud',
  'Getting Started with Git and GitHub — IBM (Coursera)',
  'Introduction to Software Engineering — IBM (Coursera)',
];

export function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  useEffect(() => {
    // 3D Timeline pop animation
    gsap.from(".timeline-node", {
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.5,
      y: 50,
      rotateX: 45,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="achievements" ref={ref} className="section-padding relative bg-card/30 timeline-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hackathons & <span className="gradient-text">Recognition</span>
            </h2>
          </motion.div>

          {/* Achievements Grid with Flip Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="timeline-node h-80"
                style={{ perspective: '1000px' }}
              >
                <FlipCard
                  className="w-full h-full"
                  front={
                    <div
                      className={cn(
                        'relative w-full h-full rounded-2xl glass-card overflow-hidden card-3d',
                        achievement.highlight && 'ring-2 ring-primary/30'
                      )}
                    >
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={achievement.image} 
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        
                        {/* Icon overlay */}
                        <div className={cn(
                          'absolute bottom-3 left-4 w-10 h-10 rounded-lg flex items-center justify-center',
                          achievement.highlight ? 'bg-primary/90' : 'bg-muted/90'
                        )}>
                          <achievement.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={cn(
                            'px-2 py-0.5 text-xs font-semibold rounded-full',
                            achievement.role === 'Winner' && 'bg-yellow-500/20 text-yellow-400',
                            achievement.role === 'Finalist' && 'bg-secondary/20 text-secondary',
                            achievement.role === '3rd Place' && 'bg-orange-500/20 text-orange-400'
                          )}>
                            {achievement.role}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono">{achievement.year}</span>
                        </div>
                        <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      </div>
                    </div>
                  }
                  back={
                    <div className={cn(
                      'w-full h-full rounded-2xl p-6 flex flex-col justify-center items-center text-center',
                      'bg-gradient-to-br from-card to-background border border-border/50'
                    )}>
                      <achievement.icon className={cn(
                        'w-12 h-12 mb-4',
                        achievement.highlight ? 'text-primary' : 'text-muted-foreground'
                      )} />
                      <h3 className="font-bold text-lg mb-3">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <motion.span
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="px-4 py-2 rounded-lg glass-card text-sm hover:border-primary/50 transition-colors card-3d cursor-default"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
