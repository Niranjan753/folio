"use client";

import Image from "next/image";
import Dock from "../components/Dock";
import { Home as HomeIcon, Github, Instagram, BookOpen } from "lucide-react";
import TrueFocus from "../components/TrueFocus";
import BlurText from "../components/BlurText";
import { motion } from "motion/react";
import { ModeToggle } from "../components/ModeToggle";
import Shader from "../components/shader";


export default function Home() {
  const items = [
    { icon: <HomeIcon size={18} />, label: "Home", onClick: () => window.location.reload() },
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
    // { icon: <ModeToggle />, label: "Theme" }
  ];

  return (
    <>
    <div className="w-full bg-red-900 pb-2">
    <motion.div
initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
transition={{ delay: 0.1, duration: 0.5 }}
viewport={{ once: true }}
>
    <Shader />
    <p className="text-white text-center">Aiming for global hegemony</p>
    </motion.div>
    </div>
      <div className="relative min-h-screen flex flex-col bg-black text-xs sm:text-sm md:text-base lg:text-lg">
        <div
          className="flex flex-1 flex-col items-center justify-center min-h-screen py-8 pb-20 sm:pb-24 font-sans relative mt- 50"
        >

          <main className="w-full max-w-4xl space-y-8 px-6 sm:px-3 md:px-4 lg:px-20">
            <section className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6">
              <div className="space-y-1 w-full sm:w-auto">
                <BlurText
                  text="Hi, Berlin here"
                  delay={15}
                  animateBy="words"
                  direction="top"
                  className="text-xl sm:text-3xl font-extrabold tracking-tight text-center"
                />
                <BlurText
                  text="20 year old hacking internet"
                  delay={15}
                  animateBy="words"
                  direction="top"
                  className="text-sm sm:text-lg text-muted-foreground text-center"
                />
              </div>
              <div className="shrink-0 relative">
                <TrueFocus
                  sentence="Berlin Niranjan"
                  manualMode={true}
                  blurAmount={5}
                  borderColor="silver"
                  glowColor="rgba(221, 255, 0, 0.6)"
                  animationDuration={0.4}
                  pauseBetweenAnimations={0.4}
                >
                </TrueFocus>
                
              </div>
              
            </section>


            <section className="space-y-2">
              <BlurText
                text="About"
                delay={10}
                animateBy="characters"
                direction="top"
                className="text-lg font-semibold text-center sm:text-left"
              />
              <BlurText
                text="tldr; learnt by hacking around on the internet."
                delay={15}
                animateBy="characters"
                direction="top"
                className="text-sm text-muted-foreground max-w-3xl mx-auto sm:mx-0"
              />
              <BlurText
                text="i like technology and attention. They build software empires."
                delay={10}
                animateBy="characters"
                direction="top"
                className="text-sm text-muted-foreground max-w-3xl mx-auto sm:mx-0"
              />
            </section>

            <section className="space-y-3">
              <BlurText
                text="Cool things I Built"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-lg font-semibold text-center sm:text-left"
              />
              <ul className="space-y-2">
                {[
                  { title: "Pocketsflow", role: "Co-founder", date: "March 2024 - Present" },
                  { title: "Traviflow", role: "Co-founder", date: "September 2025 - Present" },
                ].map((job, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 p-3"
                  >
                    <div className="flex items-center gap-2">
                      {(() => {
                        const logoSrc = job.title === "Pocketsflow" ? "/pocketsflow logo.png" : job.title === "Traviflow" ? "/traviflow logo.png" : null;
                        return logoSrc ? (
                          <div className="h-8 w-8 rounded-full bg-white/5 overflow-hidden flex items-center justify-center">
                            <Image src={logoSrc} alt={`${job.title} logo`} width={32} height={32} className="object-contain" />
                          </div>
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">🏢</div>
                        );
                      })()}
                      <div>
                        {job.title === "Pocketsflow" ? (
                          <a
                            href="https://pocketsflow.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline focus:underline group inline-flex items-center gap-1"
                          >
                            <BlurText
                              text={job.title}
                              delay={80}
                              animateBy="words"
                              direction="top"
                              className="font-medium text-base"
                            />
                            <span className="inline-block transition-transform duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100">
                              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </a>
                        ) : job.title === "Traviflow" ? (
                          <a
                            href="https://traviflow.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline focus:underline group inline-flex items-center gap-1"
                          >
                            <BlurText
                              text={job.title}
                              delay={80}
                              animateBy="words"
                              direction="top"
                              className="font-medium text-base"
                            />
                            <span className="inline-block transition-transform duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100">
                              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </a>
                        ) : (
                          <BlurText
                            text={job.title}
                            delay={80}
                            animateBy="words"
                            direction="top"
                            className="font-medium text-base"
                          />
                        )}
                        <BlurText
                          text={job.role}
                          delay={100}
                          animateBy="words"
                          direction="top"
                          className="text-xs text-muted-foreground"
                        />
                      </div>
                    </div>
                    <BlurText
                      text={job.date}
                      delay={120}
                      animateBy="words"
                      direction="top"
                      className="text-xs text-muted-foreground whitespace-nowrap"
                    />
                  </motion.li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <BlurText
                text="Education"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-lg font-semibold text-center sm:text-left"
              />
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/5 overflow-hidden flex items-center justify-center">
                    <Image src="/sairam logo.png" alt="Sri Sairam Engineering College logo" width={32} height={32} className="object-contain" />
                  </div>
                  <div>
                    <BlurText
                      text="Sri Sairam Engineering College"
                      delay={80}
                      animateBy="words"
                      direction="top"
                      className="font-medium text-base"
                    />
                    <BlurText
                      text="Computer Science and Engineering"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      className="text-xs text-muted-foreground"
                    />
                  </div>
                </div>
                <BlurText
                  text="2022 - 2026"
                  delay={120}
                  animateBy="words"
                  direction="top"
                  className="text-xs text-muted-foreground whitespace-nowrap"
                />
              </motion.div>
            </section>

            <section className="space-y-3">
              <BlurText
                text="Skills"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-lg font-semibold text-center sm:text-left"
              />
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {["React","Next.js","Typescript","node","Python","Swift","MongoDB","Supabase","Express","swiftUI","payloadcms","Organic Marketing", "Stripe checkout", "Stripe-connect","seo","performance marketing"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-2 py-0.5 rounded-full bg-white/10 text-xs"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </section>
           

            <section className="space-y-3">
              <BlurText
                text="some picks for you"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-lg font-semibold text-center sm:text-left"
              />
              <div className="flex flex-col gap-3 max-w-xl">
                
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-white/10"
                >
                  <iframe
                    style={{ border: 0, width: '100%', height: 152 }}
                    src="https://open.spotify.com/embed/track/3FnwHtnBmLOfQgZIks9N7x?si=a61d5cb0c8724f69"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </motion.div>
  
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-white/10"
                >
                  <iframe
                    style={{ border: 0, width: '100%', height: 152 }}
                    src="https://open.spotify.com/embed/track/709ZIqPHyFOpx2QdjmeWAM?si=31d6e9462d87449f"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-white/10"
                >
                  <iframe
                    style={{ border: 0, width: '100%', height: 152 }}
                    src="https://open.spotify.com/embed/track/2vlkTkPqdATznKHu9gD2c1?si=d8d9bd2953394796"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-white/10"
                >
                  <iframe
                    style={{ border: 0, width: '100%', height: 152 }}
                    src="https://open.spotify.com/embed/track/29f1UUWRj3NCD1WAaDwAOr?si=e970a1b2d7f240ee"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </motion.div>


              </div>
            </section>


            <footer className="py-6 text-center space-y-3">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto h-1 w-8 rounded-full bg-white/50"
              />
              <div className="text-xs text-muted-foreground">
                <BlurText
                  text="say hello on"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="text-xs text-muted-foreground inline mr-1"
                />
                <motion.a
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="underline"
                  href="https://www.instagram.com/berlified/"
                >
                  Instagram
                </motion.a>
              </div>
            </footer>
          </main>

          <Dock
            items={items}
            panelHeight={56}
            baseItemSize={44}
            magnification={60}
          />
        </div>
      </div>
      </>
  );
}
