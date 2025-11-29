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
  },
  {
    title: 'Finmate',
    description: 'Personal finance and budgeting assistant designed for smart money management and insights.',
    tech: ['Next.js', 'React'],
    image: finmateImage,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    github: 'https://github.com/Vino1705/Kart-i-quo.git',
    demo: 'https://kart-i-quo-fujv.onrender.com',
  },
  {
    title: 'Lunar Terrain Reconstruction',
    description: '3D mesh generation and hazard detection from single lunar images using advanced Shape-from-Shading techniques.',
    tech: ['Python', 'Flask', 'Babylon.js', 'Vite', 'Shape-from-Shading'],
    image: lunarImage,
    gradient: 'from-slate-500/20 to-zinc-500/20',
    github: 'https://github.com/Ganesh-0509/ISRO-HAVK-Revolutionizing-Lunar-Terrain-Intelligence-for-Space-Missions',
    demo: 'https://lunarwebsite-y38g.onrender.com/',
  },
  {
    title: 'Pharma Insights',
    description: 'AI pharmaceutical knowledge engine providing intelligent insights and analysis for the healthcare industry.',
    tech: ['Next.js', 'React', 'Tailwind', 'Genkit', 'HuggingFace', 'Google AI', 'Firebase'],
    image: pharmaImage,
    gradient: 'from-blue-500/20 to-indigo-500/20',
    github: 'https://github.com/Ganesh-0509/Pharma-Insights',
    demo: null,
  }
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, ML, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  'group relative rounded-2xl overflow-hidden transition-all duration-700 ease-out',
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                )}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                  transitionProperty: 'opacity, transform'
                }}
              >
                {/* Background Gradient */}
                <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-70', project.gradient)} />
                
                {/* Card Content */}
                <div className="relative glass-card h-full overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  {/* Project Image */}
                  <div className="relative w-full h-56 md:h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  </div>

                  <div className="p-5 md:p-6">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={cn(
                            'px-2 py-0.5 text-xs font-mono rounded-md bg-background/50 text-muted-foreground border border-border/50 transition-all duration-300',
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                          )}
                          style={{ transitionDelay: isVisible ? `${(index * 150) + (techIndex * 50)}ms` : '0ms' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="gap-2 transition-all duration-300 hover:scale-105"
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
                          className="gap-2 transition-all duration-300 hover:scale-105"
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
