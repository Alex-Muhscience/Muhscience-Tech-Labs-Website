import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Brain, Code, Lock, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20"
            style={{
              maskImage: "radial-gradient(circle at center, transparent 0%, black 100%)",
            }}
          />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-orbitron text-4xl font-bold tracking-tight sm:text-6xl">
                Securing the Future with{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We specialize in cybersecurity, AI/ML solutions, and full-stack development.
                Protecting your digital assets while driving technological advancement.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-center font-orbitron text-3xl font-bold">Our Services</h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
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
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
                >
                  <div className="mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}