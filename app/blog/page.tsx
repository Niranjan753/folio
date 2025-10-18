"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "motion/react";
import BlurText from '../../components/BlurText';
import Dock from '../../components/Dock';
import { Calendar, Clock, ArrowRight, Home as HomeIcon, Github, Instagram, BookOpen } from "lucide-react";
import { ModeToggle } from '../../components/ModeToggle';

const Blog = () => {
  const blogPosts = [
    {
      id: 'why-i-love-zoho',
      title: "Why I Love Zoho: The Power of Being Bootstrapped",
      excerpt: "Zoho is a company that Silicon valley geniuses could only dream to be",
      imageAlt: "Zoho logo",
      date: "October 2025",
      readTime: "5 min read",
      slug: "why-i-love-zoho"
    }
  ];

  const dockItems = [
    { icon: <HomeIcon size={18} />, label: "Home", onClick: () => window.open("/", "_self") },
    { icon: <BookOpen size={18} />, label: "Blog", onClick: () => window.location.reload() },
    { icon: <Github size={18} />, label: "GitHub", onClick: () => window.open("https://github.com/Niranjan753", "_blank", "noopener,noreferrer") },
    { icon: (
        <Image
          src="/pocketsflow logo.png"
          alt="Pocketsflow"
          width={18}
          height={18}
          className="object-contain"
        />
      ),
      label: "Pocketsflow",
      onClick: () => window.open("https://pocketsflow.com", "_blank", "noopener,noreferrer")
    },
    { icon: (
        <Image
          src="/traviflow logo.png"
          alt="Traviflow"
          width={18}
          height={18}
          className="object-contain"
        />
      ),
      label: "Traviflow",
      onClick: () => window.open("https://traviflow.com", "_blank", "noopener,noreferrer")
    },
    { icon: <Instagram size={18} />, label: "Instagram", onClick: () => window.open("https://www.instagram.com/berlified/", "_blank", "noopener,noreferrer") },
    // { icon: <ModeToggle />, label: "Theme" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col items-center justify-center min-h-screen py-8 pb-28 sm:pb-24 font-sans relative z-10">
        <div className="max-w-4xl mx-auto py-12 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <BlurText
              text="Blog"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold mb-4"
            />
            <BlurText
              text="Thoughts, insights, and lessons from building in the tech world"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-lg text-muted-foreground"
            />
          </div>

          {/* Blog Cards Grid */}
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Image Section
                  {post.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )} */}

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <BlurText
                        text={post.title}
                        delay={80}
                        animateBy="words"
                        direction="top"
                        className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-200"
                      />
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <BlurText
                      text={post.excerpt}
                      delay={100}
                      animateBy="words"
                      direction="top"
                      className="text-sm text-muted-foreground leading-relaxed"
                    />

                    {/* Read More Button */}
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors duration-200 group/btn">
                      <span>Read More</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight size={14} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <BlurText
              text="More posts coming soon..."
              delay={200}
              animateBy="words"
              direction="top"
              className="text-sm text-muted-foreground"
            />
          </div>
        </div>
      </div>
      
      <Dock
        items={dockItems}
        panelHeight={56}
        baseItemSize={44}
        magnification={60}
      />
    </div>
  );
};

export default Blog;