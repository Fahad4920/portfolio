'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { motion, AnimatePresence } from 'motion/react';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import GradientButton from '../common/GradientButton';
import { socialLinks } from '@/data/social';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-violet-400" />,
      label: "Email",
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-400" />,
      label: "Phone",
      value: socialLinks.phone,
      href: `tel:${socialLinks.phone}`,
    },
    {
      icon: <MapPin className="w-5 h-5 text-sky-400" />,
      label: "Location",
      value: `${socialLinks.location} `,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative z-10 w-full bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="Let's Work Together"
          subtitle="If you are looking for a software engineer to join your team onsite or remotely, let's connect."
          badge="Contact"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Left Column Contact Details cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <h4 className="text-xl font-extrabold tracking-tight text-foreground">Contact Details</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Drop me an email, call, or message me directly on LinkedIn. I am active and ready to discuss technical requirements.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {contactInfo.map((info, idx) => (
                <GlassCard key={idx} glowColor="blue" hoverEffect="scale" className="p-5 flex gap-4 items-center">
                  <div className="p-3 rounded-xl bg-card border border-border text-primary flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{info.label}</span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-bold text-foreground mt-0.5 block hover:text-primary transition-colors cursor-pointer select-none"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-foreground mt-0.5 block">{info.value}</span>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Social channels links */}
            <div className="flex gap-4 items-center mt-6">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-sm cursor-pointer select-none"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-sm cursor-pointer select-none"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column Glassmorphism contact form */}
          <div className="lg:col-span-7 w-full">
            <GlassCard glowColor="purple" hoverEffect="none" className="p-6 md:p-8 relative">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5 w-full"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Your Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`bg-card/40 border-border/50 rounded-xl py-5 text-xs ${errors.name ? 'border-rose-500/80 ring-rose-500/20' : ''}`}
                          placeholder="Fahad Sajid"
                        />
                        {errors.name && <span className="text-[10px] text-rose-400 font-semibold">{errors.name}</span>}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`bg-card/40 border-border/50 rounded-xl py-5 text-xs ${errors.email ? 'border-rose-500/80' : ''}`}
                          placeholder="fahadsajid492@gmail.com"
                        />
                        {errors.email && <span className="text-[10px] text-rose-400 font-semibold">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`bg-card/40 border-border/50 rounded-xl py-5 text-xs ${errors.subject ? 'border-rose-500/80' : ''}`}
                        placeholder="Hiring Opportunity / Collaboration Project"
                      />
                      {errors.subject && <span className="text-[10px] text-rose-400 font-semibold">{errors.subject}</span>}
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Your Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`bg-card/40 border-border/50 rounded-xl text-xs ${errors.message ? 'border-rose-500/80' : ''}`}
                        placeholder="Hi Fahad, I'm looking to discuss an opportunity..."
                      />
                      {errors.message && <span className="text-[10px] text-rose-400 font-semibold">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-2 flex w-full">
                      <GradientButton
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4.5 text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer select-none"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin inline-block" />
                            <span>Sending message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </GradientButton>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10 font-sans"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce mb-5" />
                    <h5 className="text-xl font-extrabold tracking-tight text-foreground">Message Sent Successfully!</h5>
                    <p className="text-sm text-muted-foreground max-w-sm mt-2 leading-relaxed">
                      Thank you for reaching out. I&apos;ll read your query and get back to you as soon as possible.
                    </p>
                    <GradientButton
                      variant="secondary"
                      size="sm"
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 font-bold cursor-pointer select-none"
                    >
                      Send Another Message
                    </GradientButton>
                  </motion.div>
                )}
              </AnimatePresence>

            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}

