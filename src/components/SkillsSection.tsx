import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C'],
  },
  {
    title: 'ML / AI / Frameworks',
    skills: ['PyTorch', 'Keras', 'Scikit-learn', 'Regression', 'Classification', 'Neural Networks', 'Supervised Learning', 'Unsupervised Learning'],
  },
  {
    title: 'Data Tools',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Visualization'],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'VS Code', 'Flask', 'Next.js'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="section-padding relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems and applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={cn(
                  'p-6 rounded-2xl glass-card transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="font-semibold mb-4 text-lg">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
