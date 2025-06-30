import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Brain, Code, Lock, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import './globals.css';

export default function Home() {
  const services = [
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our advanced security solutions",
      icon: Lock,
    },
    {
      title: "AI/ML Solutions",
      description: "Harness the power of artificial intelligence for your business",
      icon: Brain,
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your needs",
      icon: Code,
    },
    {
      title: "Innovation Labs",
      description: "Research and development for cutting-edge technologies",
      icon: Sparkles,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section - Improved responsive padding and text sizing */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 mask-radial-gradient"
            aria-hidden="true"
          />
          <div className="container relative px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-Arial text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Securing the Future with{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>
              <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                We specialize in cybersecurity, AI/ML solutions, and full-stack development.
                Protecting your digital assets while driving technological advancement.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Enhanced grid responsiveness */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container px-4 sm:px-6">
            <h2 className="text-center font-Calibri text-2xl font-bold sm:text-3xl">
              Our Services
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-card p-5 transition-all hover:shadow-lg sm:p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="font-Calibri text-lg font-semibold sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional responsive sections can be added here */}
      </main>
      <SiteFooter />
    </div>
  );
}