import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Brain, Code, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    label: 'ML & AI',
    description: 'Deep Learning & Neural Networks',
  },
  {
    icon: Code,
    label: 'Full Stack',
    description: 'Python, Java, Web Development',
  },
  {
    icon: Rocket,
    label: 'Gen AI',
    description: 'Building intelligent systems',
  },
  {
    icon: Users,
    label: 'Hackathons',
    description: 'Multiple wins & finalist',
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <span className="text-primary font-mono text-sm mb-4 block">01. About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who I <span className="gradient-text">Am</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Ganesh Kumar T, a Machine Learning Engineering student passionate about building intelligent, data-driven systems. I specialize in supervised & unsupervised learning, deep learning, and real-world AI applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I enjoy solving Python, Java, and DSA problems, and I've worked on projects involving 3D reconstruction, Gen AI, automation systems, and enterprise AI workflows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I actively participate in hackathons and love exploring new ML, DL, and GenAI tools to build impactful solutions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className={cn(
              'grid grid-cols-2 gap-4 transition-all duration-700 delay-400',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}>
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl glass-card hover-lift group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
