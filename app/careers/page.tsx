// CareersPage.tsx
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const jobOpenings = [
  {
    title: "Cybersecurity Analyst",
    description: "Join our team as a cybersecurity analyst. Protect digital assets and drive technological advancement.",
  },
  {
    title: "AI Researcher",
    description: "Contribute to our AI research initiatives. Explore the latest advancements in artificial intelligence.",
  },
  {
    title: "Software Developer",
    description: "Develop custom software solutions tailored to client needs. Work on a variety of projects.",
  },
  {
    title: "Innovation Lab Intern",
    description: "Join our innovation lab as an intern. Gain hands-on experience in cutting-edge technologies.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-center font-orbitron text-3xl font-bold">Careers</h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            Join our team and help shape the future of technology.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{job.description}</p>
                  <Button variant="link" className="mt-4">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}