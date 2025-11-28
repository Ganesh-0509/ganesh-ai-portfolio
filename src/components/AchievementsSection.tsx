import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Trophy, Medal, Award } from 'lucide-react';

const achievements = [
  {
    title: 'Intel AI Hackathon',
    role: 'Winner',
    year: '2025',
    icon: Trophy,
    description: 'First place in Intel\'s prestigious AI hackathon, demonstrating excellence in AI innovation.',
    highlight: true,
  },
  {
    title: 'NxtWave x OpenAI Buildathon',
    role: 'Finalist',
    year: '2025',
    icon: Medal,
    description: 'Selected as a finalist among hundreds of participants for building innovative AI solutions.',
    highlight: true,
  },
  {
    title: 'VOID V1 (VIT Chennai)',
    role: '3rd Place',
    year: '2025',
    icon: Award,
    description: 'Secured third position at VIT Chennai\'s hackathon, showcasing technical prowess.',
    highlight: false,
  },
];

const certifications = [
  'Oracle Java SE21 Developer',
  'Google Vertex AI — Prompt Design',
  '5-day GenAI Intensive — Kaggle',
  'Coursera Java Badge',
  'YBI Python Programming',
];

export function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="achievements" ref={ref} className="section-padding relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hackathons & <span className="gradient-text">Recognition</span>
            </h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={cn(
                  'relative p-6 rounded-2xl glass-card hover-lift transition-all duration-700',
                  achievement.highlight && 'ring-2 ring-primary/30',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center mb-4',
                  achievement.highlight ? 'bg-primary/20' : 'bg-muted/50'
                )}>
                  <achievement.icon className={cn(
                    'w-7 h-7',
                    achievement.highlight ? 'text-primary' : 'text-muted-foreground'
                  )} />
                </div>

                {/* Content */}
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
                <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className={cn(
            'transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 rounded-lg glass-card text-sm hover:border-primary/50 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
