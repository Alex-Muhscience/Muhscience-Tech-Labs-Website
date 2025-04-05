// FAQPage.tsx
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer cybersecurity, AI/ML solutions, and full-stack development. Protecting your digital assets while driving technological advancement.",
  },
  {
    question: "How can I get in touch with you?",
    answer: "You can contact us through our contact page or email us at contact@cybermuhscience.com.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we specialize in providing custom solutions tailored to your specific needs. Contact us for a consultation.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries, including finance, healthcare, technology, and more.",
  },
  {
    question: "How long has CyberMuhscience iLabs been in business?",
    answer: "CyberMuhscience iLabs has been in business for over 10 years, providing innovative solutions to clients worldwide.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-center font-orbitron text-3xl font-bold">FAQ</h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            Find answers to common questions here.
          </p>
          <div className="mt-16">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}