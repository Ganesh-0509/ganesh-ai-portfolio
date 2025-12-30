import { motion } from 'framer-motion';
import { ExpandableProjectCards } from '@/components/ui/ExpandableProjectCard';

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
    content: 'SAHAAY-AI is a comprehensive mental wellness platform that leverages Google\'s Gemini API to provide personalized mental health support. Features include real-time mood tracking, AI-powered chat support, emergency contact integration via Pushbullet, and secure data storage with Firestore.',
  },
  {
    title: 'Finmate',
    description: 'Personal finance and budgeting assistant designed for smart money management and insights.',
    tech: ['Next.js', 'React'],
    image: finmateImage,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    github: 'https://github.com/Vino1705/Kart-i-quo.git',
    demo: 'https://kart-i-quo-fujv.onrender.com',
    content: 'Finmate helps users take control of their finances with intuitive budgeting tools, expense tracking, and smart financial insights. Built with Next.js for optimal performance and user experience.',
  },
  {
    title: 'Lunar Terrain Reconstruction',
    description: '3D mesh generation and hazard detection from single lunar images using advanced Shape-from-Shading techniques.',
    tech: ['Python', 'Flask', 'Babylon.js', 'Vite', 'Shape-from-Shading'],
    image: lunarImage,
    gradient: 'from-slate-500/20 to-zinc-500/20',
    github: 'https://github.com/Ganesh-0509/ISRO-HAVK-Revolutionizing-Lunar-Terrain-Intelligence-for-Space-Missions',
    demo: 'https://lunarwebsite-y38g.onrender.com/',
    content: 'An innovative project developed for ISRO HAVK challenge that reconstructs 3D lunar terrain from 2D images. Uses advanced Shape-from-Shading algorithms for accurate depth estimation and Babylon.js for interactive 3D visualization.',
  },
  {
    title: 'Pharma Insights',
    description: 'AI pharmaceutical knowledge engine providing intelligent insights and analysis for the healthcare industry.',
    tech: ['Next.js', 'React', 'Tailwind', 'Genkit', 'HuggingFace', 'Google AI', 'Firebase'],
    image: pharmaImage,
    gradient: 'from-blue-500/20 to-indigo-500/20',
    github: 'https://github.com/Ganesh-0509/Pharma-Insights',
    demo: null,
    content: 'Pharma Insights combines multiple AI technologies to deliver comprehensive pharmaceutical knowledge. Integrates HuggingFace models, Google AI, and Firebase for a robust, scalable healthcare analytics platform.',
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-16 relative">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on a project to explore more details
            </p>
          </motion.div>

          {/* Expandable Project Cards */}
          <ExpandableProjectCards projects={projects} />
        </div>
      </div>
    </section>
  );
}
