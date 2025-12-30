import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { GraduationCap, Calendar } from 'lucide-react';

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="education" ref={ref} className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>

          {/* Education Card */}
          <div className={cn(
            'relative transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="p-8 md:p-10 rounded-2xl glass-card hover-lift">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Saveetha Engineering College</h3>
                    <p className="text-primary font-medium">B.Tech — Artificial Intelligence & Machine Learning</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">2024 — 2028</span>
                </div>
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-background/50">
                  <span className="text-sm text-muted-foreground">Current GPA</span>
                  <p className="text-2xl font-bold gradient-text">8.0</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <span className="text-sm text-muted-foreground">Focus Areas</span>
                  <p className="font-medium">Machine Learning, Deep Learning, AI Systems</p>
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-6">
                <h4 className="text-sm text-muted-foreground mb-3">Core Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Machine Learning',
                    'Deep Learning',
                    'Neural Networks',
                    'Data Structures',
                    'Algorithms',
                    'Computer Vision',
                    'Natural Language Processing',
                    'Statistics & Probability',
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-sm rounded-lg bg-primary/10 text-primary/80 border border-primary/20"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* School Education Card */}
          <div className={cn(
            'relative transition-all duration-700 delay-400 mt-6',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="p-8 md:p-10 rounded-2xl glass-card hover-lift">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Velammal Vidyalaya Poonamallee</h3>
                    <p className="text-primary font-medium">Higher Secondary Education</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">2020 — 2024</span>
                </div>
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-background/50">
                  <span className="text-sm text-muted-foreground">SSLC</span>
                  <p className="text-2xl font-bold gradient-text">90.2%</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <span className="text-sm text-muted-foreground">HSLC</span>
                  <p className="text-2xl font-bold gradient-text">87.4%</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <span className="text-sm text-muted-foreground">Recognition</span>
                  <p className="font-medium">Distinction in Academics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
