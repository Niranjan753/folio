"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import BlurText from '../../../components/BlurText';
import Dock from '../../../components/Dock';
import { ArrowLeft, Calendar, Clock, Home as HomeIcon, Github, Instagram, BookOpen } from "lucide-react";
import { ModeToggle } from '../../../components/ModeToggle';

const ZohoBlogPage = () => {
  const dockItems = [
    { icon: <HomeIcon size={18} />, label: "Home", onClick: () => window.open("/", "_self") },
    { icon: <BookOpen size={18} />, label: "Blog", onClick: () => window.open("/blog", "_self") },
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
    { icon: <ModeToggle />, label: "Theme" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col items-center justify-center min-h-screen py-8 pb-28 sm:pb-24 font-sans relative z-10">
        <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="mb-8"
      >
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-100 group"
        >
          <motion.div
            animate={{ x: [-2, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
          >
            <ArrowLeft size={16} />
          </motion.div>
          <span className="group-hover:underline">Back to Blog</span>
        </Link>
      </motion.div>

      {/* Hero Image */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl mb-8"
      >
        <Image
          src="/zoho logo.png"
          alt="Zoho logo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div> */}

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
      >
        <BlurText
          text="Why I Love Zoho: "
          delay={80}
          animateBy="words"
          direction="top"
          className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
        />
        
        <BlurText
          text="In a startup world obsessed with unicorns, venture capital, and rapid scaling, Zoho stands out as a rare breed—a global SaaS giant that has grown entirely through bootstrapping."
          delay={30}
          animateBy="words"
          direction="top"
          className="text-lg text-muted-foreground leading-relaxed mb-6"
        />

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>October 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>5 min read</span>
          </div>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground relative"
      >
        {/* Decorative Zoho logo floating in the background */}
        {/* <div className="pointer-events-none absolute -top-16 -right-16 opacity-10 blur-2xl select-none hidden sm:block">
          <Image
            src="/zoho logo.png"
            alt="Zoho logo faded"
            width={320}
            height={320}
            className="w-80 h-80 object-contain"
            draggable={false}
          />
        </div> */}
{/* 
        <p className="!text-xl !font-medium !mb-8 flex items-center gap-3">
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2">
            <Image src="/zoho logo.png" alt="Zoho logo" width={32} height={32} className="object-contain" />
          </span>
          <span>
            In a world obsessed with unicorns, venture capital, and rapid scaling, <strong>Zoho</strong> stands out as a rare breed—a global SaaS giant that has grown entirely through bootstrapping. As a founder and builder myself, Zoho's journey is not just inspiring, but also deeply validating for the path I've chosen with <strong>Pocketsflow</strong>.
          </span>
        </p> */}
        
        {/* <div className="my-10 flex flex-col sm:flex-row gap-6 items-center justify-center">
          <div className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 shadow-lg border border-primary/10 w-full sm:w-1/2">
            <span className="text-3xl font-bold text-primary mb-2">80M+</span>
            <span className="text-muted-foreground text-sm">Users Worldwide</span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 shadow-lg border border-primary/10 w-full sm:w-1/2">
            <span className="text-3xl font-bold text-primary mb-2">50+</span>
            <span className="text-muted-foreground text-sm">Products</span>
          </div>
        </div> */}
        <p>
          Zoho is a rare example of a huge software company built without outside funding. They focused on building good products and serving customers, not chasing investors.
        </p>
        <ul>
          <li>Bootstrapped from day one</li>
          <li>Over 80 million users</li>
          <li>50+ products</li>
          <li>Profitable and independent</li>
        </ul>
        <p>
          I like bootstrapping because it means you build for real users, not for investors. <br/> Every dollar comes from customers, not VCs.
        </p>
        <br/>

        {/* <h2 className="!text-2xl !font-bold !mb-2 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Zoho: The Bootstrapped Behemoth
        </h2> */}
        <p>
          Zoho's story is legendary in the Indian and global tech ecosystem. Founded in 1996 by Sridhar Vembu, Zoho has never taken a single dollar of external funding.
        </p>
        {/* <p>
          What makes Zoho's bootstrapped journey so remarkable is the freedom it has afforded the company. Without the pressure of quarterly investor calls or the need to chase vanity metrics, Zoho has been able to:
        </p> */}
        <br />
        <ul className="!mb-8">
          <li>
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            <strong>Prioritize long-term value</strong> over short-term growth hacks.
          </li>
          <li>
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            <strong>Invest in people and culture</strong>—from building a rural campus to nurturing talent from scratch.
          </li>
          <li>
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            <strong>Innovate at its own pace</strong>, launching products when they're truly ready.
          </li>
          <li>
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            <strong>Stay profitable and sustainable</strong> through every market cycle.
          </li>
        </ul>
        
        {/* <div className="my-10 flex flex-col sm:flex-row gap-6 items-center justify-center">
          <div className="flex flex-col items-center bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 shadow border border-secondary/10 w-full sm:w-1/2">
            <span className="text-lg font-semibold text-secondary mb-1">No VC Funding</span>
            <span className="text-muted-foreground text-xs">100% Bootstrapped</span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 shadow border border-secondary/10 w-full sm:w-1/2">
            <span className="text-lg font-semibold text-secondary mb-1">Global Impact</span>
            <span className="text-muted-foreground text-xs">Serving 150+ countries</span>
          </div>
        </div> */}

        <h2 className="!text-2xl !font-bold !mb-2 flex items-center gap-2">
          {/* <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span> */}
          Why Bootstrapping Resonates With Me
        </h2>
        <p>
          As a builder, I've always admired companies that choose the harder, slower, but ultimately more rewarding path of bootstrapping. It's not just about retaining equity or control—it's about building a business that's <em>real</em>. Every dollar earned is a validation from a customer, not an investor. Every feature shipped is driven by user need, not a pitch deck.
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
          Bootstrapping forces you to be scrappy, creative, and customer-obsessed. It teaches you discipline and resilience. And most importantly, it lets you build a company on your own terms.
        </blockquote>
        
        <h2 className="!text-2xl !font-bold !mb-2 flex items-center gap-2">
          {/* <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span> */}
          How Zoho Inspires Pocketsflow
        </h2>
        <p>
          At <strong>Pocketsflow</strong>, we've taken a page out of Zoho's playbook. We're building our product with a laser focus on solving real problems for real users. We're not chasing funding rounds or growth-at-all-costs. <br/> Instead, we're obsessed with delivering value, listening to our users, and growing sustainably.
        </p>
        <div className="flex items-center gap-3 my-6">
          <Image src="/pocketsflow logo.png" alt="Pocketsflow logo" width={40} height={40} className="object-contain rounded-full bg-white/10 p-1" />
          <span className="text-base text-muted-foreground">Inspired by Zoho's journey</span>
        </div>
        <p>
          Zoho's journey gives us the confidence that it's possible to build something meaningful without external capital. It reminds us that culture, product, and customer obsession matter more than headlines or valuations. And it proves that, with patience and perseverance, bootstrapped companies can not only survive—but thrive—on the global stage.
        </p>
        
        {/* <h2 className="!text-2xl !font-bold !mb-2 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Conclusion
        </h2>
        <p>
          In a noisy world, Zoho is a beacon for founders like me. Their success is proof that you don't need to follow the crowd to build something great. At Pocketsflow, we're proud to walk the bootstrapped path, inspired by Zoho's example—and excited to see where this journey takes us.
        </p>
        <div className="flex justify-center mt-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold shadow">
            🚀 Bootstrapped &amp; Proud
          </span>
        </div> */}
      </motion.article>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 pt-8 border-t border-white/10"
      >
        <div className="text-center">
          <BlurText
            text="Thanks for reading!"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-sm text-muted-foreground mb-4"
          />
          {/* <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            <span>Back to Blog</span>
          </Link> */}
        </div>
      </motion.footer>
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

export default ZohoBlogPage;
