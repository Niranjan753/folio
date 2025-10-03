"use client";

import Image from "next/image";
import Dock from "../components/Dock";
import { Home as HomeIcon, Github, Instagram } from "lucide-react";
import Noise from '../components/Noise';
import PixelBlast from "../components/PixelBlast";
import CircularText from "../components/CircularText";
import TrueFocus from "../components/TrueFocus";


export default function Home() {
  const items = [
    { icon: <HomeIcon size={18} />, label: "Home", onClick: () => window.location.reload() },
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
    { icon: <Instagram size={18} />, label: "Instagram", onClick: () => window.open("https://www.instagram.com/berlified/", "_blank", "noopener,noreferrer") }
  ];
  return (
      <div className="relative min-h-screen flex flex-col">
        <div
          className="flex flex-1 flex-col items-center justify-center min-h-screen py-10 pb-40 font-sans relative z-10"
        >

          <main className="w-full max-w-5xl space-y-20 mt-32 px-8 sm:px-20 md:px-28 lg:px-40">
            <section className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-10">
              <div className="space-y-2 w-full sm:w-auto">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center sm:text-left">
                  Hi, Berlin here
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground text-center sm:text-left">
                  20 year old hacking internet
                </p>
              </div>
              <div className="shrink-0 relative">
                <TrueFocus
                  sentence="Berlin Niranjan"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="silver"
                  glowColor="rgba(221, 255, 0, 0.6)"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                >
                 
                </TrueFocus>
                
              </div>
              
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-center sm:text-left">About</h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto sm:mx-0">
                tldr; learnt by hacking around on the internet.
                
              </p>


              <p className="text-sm text-muted-foreground max-w-3xl mx-auto sm:mx-0">
                i like technology and attention. They build software empires.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-center sm:text-left">Cool things I Built</h2>
              <ul className="space-y-3">
                {[
                  { title: "Pocketsflow", role: "Co-founder", date: "March 2024 - Present" },
                  { title: "Traviflow", role: "Co-founder", date: "September 2025 - Present" },
                ].map((job, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 p-3">
                    <div className="flex items-center gap-3">
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
                        <p className="font-medium text-base">{job.title}</p>
                        <p className="text-xs text-muted-foreground">{job.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground whitespace-nowrap">{job.date}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-center sm:text-left">Education</h2>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/5 overflow-hidden flex items-center justify-center">
                    <Image src="/sairam logo.png" alt="Sri Sairam Engineering College logo" width={32} height={32} className="object-contain" />
                  </div>
                  <div>
                    <p className="font-medium text-base">Sri Sairam Engineering College</p>
                    <p className="text-xs text-muted-foreground">Computer Science and Engineering</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap">2022 - 2026</p>
              </div>
            </section>

            <section className="space-y-3 pt-8">
              <h2 className="text-lg font-semibold text-center sm:text-left">Skills</h2>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {["React","Next.js","Typescript","node","Python","Swift","MongoDB","Supabase","Express","swiftUI","payloadcms","Organic Marketing", "Stripe checkout", "Stripe-connect","seo","performance marketing"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 text-xs">{tag}</span>
                ))}
              </div>
            </section>
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-center sm:text-left">some picks for you</h2>
              <div className="flex flex-col gap-4 max-w-xl">
                
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    style={{ border: 0, width: '100%', height: 152 }}
                    src="https://open.spotify.com/embed/track/3FnwHtnBmLOfQgZIks9N7x?si=a61d5cb0c8724f69"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
  
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    style={{ border: 0, width: '100%', height: 152 }}
                    src="https://open.spotify.com/embed/track/709ZIqPHyFOpx2QdjmeWAM?si=31d6e9462d87449f"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>

                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    style={{ border: 0, width: '100%', height: 152 }}
                    src="https://open.spotify.com/embed/track/2vlkTkPqdATznKHu9gD2c1?si=d8d9bd2953394796"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
                
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    style={{ border: 0, width: '100%', height: 152 }}
                    src="https://open.spotify.com/embed/track/29f1UUWRj3NCD1WAaDwAOr?si=e970a1b2d7f240ee"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>


              </div>
            </section>


            <footer className="py-8 text-center space-y-4">
              <div className="mx-auto h-1 w-8 rounded-full bg-white/50" />
              <p className="text-xs text-muted-foreground">
                say hello on <a className="underline" href="https://www.instagram.com/berlified/">Instagram</a>
              </p>
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
  );
}
