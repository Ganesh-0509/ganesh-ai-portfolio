import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ganesh957kumar@gmail.com',
    href: 'mailto:ganesh957kumar@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7825083996',
    href: 'tel:+917825083996',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',
    href: null,
  },
];

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

  return (
    <section id="contact" ref={ref} className="section-padding relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <span className="text-primary font-mono text-sm mb-4 block">06. Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about AI and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className={cn(
              'space-y-4 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}>
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl glass-card flex items-center gap-4 group hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Find me on</p>
                <div className="flex gap-3">
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

            {/* CTA Card */}
            <div className={cn(
              'transition-all duration-700 delay-400',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}>
              <div className="p-8 rounded-2xl glass-card h-full flex flex-col justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ready to collaborate?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a project idea, a question, or just want to say hi, I'd love to hear from you!
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:ganesh957kumar@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send me an Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
