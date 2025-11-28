import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
const projects = [{
  title: 'SAHAAY-AI',
  description: 'AI-powered mental wellness companion that provides personalized support and real-time assistance for mental health.',
  tech: ['Flask', 'Python', 'Tailwind', 'Gemini API', 'Firestore', 'Pushbullet'],
  image: '/placeholder.svg',
  gradient: 'from-cyan-500/20 to-blue-500/20',
  featured: true
}, {
  title: 'OPSPilot-FED',
  description: 'Enterprise automation system for patch risk analysis, intelligent alerting, and automated task execution.',
  tech: ['Python', 'ML', 'Data Visualization', 'DS Tools'],
  image: '/placeholder.svg',
  gradient: 'from-indigo-500/20 to-purple-500/20',
  featured: true
}, {
  title: 'Lunar Terrain Reconstruction',
  description: '3D mesh generation and hazard detection from single lunar images using advanced Shape-from-Shading techniques.',
  tech: ['Python', 'Flask', 'Babylon.js', 'Vite', 'Shape-from-Shading'],
  image: '/placeholder.svg',
  gradient: 'from-slate-500/20 to-zinc-500/20',
  featured: true
}, {
  title: 'Pharma Insights',
  description: 'AI pharmaceutical knowledge engine providing intelligent insights and analysis for the healthcare industry.',
  tech: ['Next.js', 'React', 'Tailwind', 'Genkit', 'HuggingFace', 'Google AI', 'Firebase'],
  image: '/placeholder.svg',
  gradient: 'from-emerald-500/20 to-teal-500/20',
  featured: true
}];
export function ProjectsSection() {
  const {
    ref,
    isVisible
  } = useScrollAnimation<HTMLElement>();
  return <section id="projects" ref={ref} className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn('text-center mb-16 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, ML, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <div key={project.title} className={cn('group relative rounded-2xl overflow-hidden transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                {/* Background Gradient */}
                <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', project.gradient)} />
                
                {/* Card Content */}
                <div className="relative glass-card h-full p-6 md:p-8 hover-lift">
                  {/* Featured Badge */}
                  {project.featured}

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
                    {project.tech.map(tech => <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-md bg-background/50 text-muted-foreground border border-border/50">
                        {tech}
                      </span>)}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}