import { Github, Linkedin, Mail, MapPin, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroFloatingBackground } from '@/components/ui/HeroFloatingBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { motion } from 'framer-motion';

export function HeroSection() {
  const roleWords = [
    { text: "Machine", className: "text-primary" },
    { text: "Learning", className: "text-primary" },
    { text: "Engineering", className: "text-primary" },
    { text: "Student", className: "text-primary" },
  ];
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Floating Background */}
      <HeroFloatingBackground />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center" style={{ perspective: '1000px' }}>
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </motion.div>

          {/* 3D Hero Text Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
            style={{ transformStyle: 'preserve-3d' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Ganesh Kumar T</span>
          </motion.h1>

          {/* Role with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <TypewriterEffectSmooth words={roleWords} className="text-xl md:text-2xl" />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
          >
            <MapPin className="w-4 h-4" />
            <span>Chennai, India</span>
          </motion.div>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <MagneticButton
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-muted/80 to-muted text-foreground"
            >
              Contact Me
            </MagneticButton>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary/50 hover:bg-primary/10 magnetic-btn"
              asChild
            >
              <a href="/resume.pdf" download="Ganesh_Kumar_T_Resume.pdf">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { href: "https://github.com/Ganesh-0509", icon: Github },
              { href: "https://www.linkedin.com/in/ganesh-kumar-957t/", icon: Linkedin },
              { href: "mailto:ganesh957kumar@gmail.com", icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="p-3 rounded-xl glass-card card-3d hover:border-primary/50 transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.button>
    </section>
  );
}
