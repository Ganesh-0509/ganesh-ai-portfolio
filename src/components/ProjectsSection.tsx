import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

import sahaayImage from '@/assets/sahaay-ai-project.jpg';
import finmateImage from '@/assets/finmate-project.jpg';
import lunarImage from '@/assets/lunar-terrain-project.png';
import pharmaImage from '@/assets/pharma-insights-project.png';

const projects = [
  {
    title: 'SAHAAY-AI',
    description: 'AI-powered mental wellness companion that provides personalized support and real-time assistance for mental health.',
    tech: ['Flask', 'Python', 'Tailwind', 'Gemini API', 'Firestore', 'Pushbullet'],
    image: sahaayImage,
    gradient: 'from-pink-500/20 to-purple-500/20',
    github: 'https://github.com/Ganesh-0509/Sahaay-Ai',
    demo: 'https://sahaay-ai-8yqm.onrender.com',
    featured: true
  },
  {
    title: 'Finmate',
    description: 'Personal finance and budgeting assistant designed for smart money management and insights.',
    tech: ['Next.js', 'React'],
    image: finmateImage,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    github: 'https://github.com/Vino1705/Kart-i-quo.git',
    demo: 'https://kart-i-quo-fujv.onrender.com',
    featured: true
  },
  {
    title: 'Lunar Terrain Reconstruction',
    description: '3D mesh generation and hazard detection from single lunar images using advanced Shape-from-Shading techniques.',
    tech: ['Python', 'Flask', 'Babylon.js', 'Vite', 'Shape-from-Shading'],
    image: lunarImage,
    gradient: 'from-slate-500/20 to-zinc-500/20',
    github: 'https://github.com/Ganesh-0509/ISRO-HAVK-Revolutionizing-Lunar-Terrain-Intelligence-for-Space-Missions',
    demo: 'https://lunarwebsite-y38g.onrender.com/',
    featured: true
  },
  {
    title: 'Pharma Insights',
    description: 'AI pharmaceutical knowledge engine providing intelligent insights and analysis for the healthcare industry.',
    tech: ['Next.js', 'React', 'Tailwind', 'Genkit', 'HuggingFace', 'Google AI', 'Firebase'],
    image: pharmaImage,
    gradient: 'from-blue-500/20 to-indigo-500/20',
    github: 'https://github.com/Ganesh-0509/Pharma-Insights',
    demo: null,
    featured: true
  }
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, ML, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  'group relative rounded-2xl overflow-hidden transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', project.gradient)} />
                
                {/* Card Content */}
                <div className="relative glass-card h-full hover-lift">
                  {/* Project Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-background/50 text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="gap-2"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="gap-2"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
