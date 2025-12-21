import { motion } from 'framer-motion';
import { Award, BadgeCheck, BookOpen, Code2, Cpu } from 'lucide-react';

const certifications = [
  {
    name: 'Oracle Java SE 21 Developer Professional',
    organization: 'Oracle',
    year: 'Nov 2025',
    icon: Code2,
  },
  {
    name: '5-Day GenAI Intensive',
    organization: 'Kaggle',
    year: 'Jan 2025',
    icon: Cpu,
  },
  {
    name: 'Build Real World AI Applications with Gemini and Imagen',
    organization: 'Google Cloud',
    year: '2024',
    icon: BadgeCheck,
  },
  {
    name: 'Getting Started with Git and GitHub',
    organization: 'IBM (Coursera)',
    year: '2024',
    icon: BookOpen,
  },
  {
    name: 'Introduction to Software Engineering',
    organization: 'IBM (Coursera)',
    year: '2024',
    icon: Award,
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-20 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group glass-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm leading-tight mb-1.5 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium">{cert.organization}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <span className="font-mono">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
