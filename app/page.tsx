import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <PageTransition>
        {/* Hero Section - Full viewport */}
        <section className="flex-1 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 w-full">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 lg:gap-24 items-start">
              {/* Left Column */}
              <div className="space-y-8 md:space-y-10 max-w-2xl">
                <div className="space-y-8 md:space-y-10">
                <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-normal tracking-tight leading-[1.15]">
                  Builder designing<br />
                  for clarity.
                </h1>
                
                <div className="space-y-5 md:space-y-6 text-muted-foreground leading-[1.7] text-[13px] sm:text-[14px]">
                  <p>
                    Co‑founder at <a className="text-foreground hover:underline" href="https://pocketsflow.com" target="_blank" rel="noreferrer">Pocketsflow</a> &{" "}
                    <a className="text-foreground hover:underline" href="https://traviflow.com" target="_blank" rel="noreferrer">Traviflow</a>. B.Tech CSE. I build products that feel obvious.
                  </p>

                  <p>
                    I craft simple, durable interfaces and systems. My current focus is internet payments and travel. Outside of building, I enjoy writing about products and process.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Niranjan753"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] sm:text-[14px] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="https://www.instagram.com/berlified/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] sm:text-[14px] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Instagram
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="mailto:niranjanr753@gmail.com"
                    className="text-[13px] sm:text-[14px] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Mail
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a
                    href="/writing"
                    className="text-[13px] sm:text-[14px] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Writing
                  </a>
                </div>
                </div>
              </div>

              {/* Right Column - Empty space for balance */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>
      </PageTransition>

      <Footer />
    </main>
  );
}
