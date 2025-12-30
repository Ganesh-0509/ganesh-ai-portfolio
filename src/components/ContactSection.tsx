import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Mail, Send, Github, Linkedin, User, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Ganesh-0509',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ganesh-kumar-957t/',
  },
];

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Show success animation
    setIsSubmitted(true);

    const mailtoLink = `mailto:ganesh957kumar@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    // Delay opening email client to show animation
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1500);
    
    // Reset form after animation
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project idea or just want to say hi? Send me a message!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="h-full min-h-[320px] flex flex-col items-center justify-center glass-card rounded-xl p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl font-bold mb-2"
                    >
                      Message Ready!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground text-center"
                    >
                      Opening your email client...
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-1 mt-4"
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, delay: i * 0.2, duration: 0.6 }}
                          className="w-2 h-2 rounded-full bg-primary"
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10 glass-card border-border/50 focus:border-primary/50"
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 glass-card border-border/50 focus:border-primary/50"
                      />
                    </div>
                    
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Subject (optional)"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="pl-10 glass-card border-border/50 focus:border-primary/50"
                      />
                    </div>
                    
                    <Textarea
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="glass-card border-border/50 focus:border-primary/50 resize-none"
                    />
                    
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Info Card */}
            <div className={cn(
              'transition-all duration-700 delay-400',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}>
              <div className="p-8 rounded-2xl glass-card h-full flex flex-col justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Let's work together!</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and your message will be sent directly to my inbox. I'll get back to you as soon as possible!
                </p>
                
                {/* Social Links */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">Or find me on</p>
                  <div className="flex gap-3 justify-center">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl glass-card hover:border-primary/50 hover:scale-110 transition-all duration-300"
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
