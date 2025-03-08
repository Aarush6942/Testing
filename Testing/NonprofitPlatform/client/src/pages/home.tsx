import { Button } from "@/components/ui/button";
import NewsletterForm from "@/components/newsletter-form";
import ContactInfo from "@/components/contact-info";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Making a Difference
          <br />
          <span className="text-primary">In Our Community</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          We're dedicated to creating positive change through education, support, and community engagement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/donate">
              Donate Now
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/information">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { number: "1000+", label: "People Helped" },
          { number: "50+", label: "Active Volunteers" },
          { number: "10+", label: "Years of Service" },
        ].map((stat) => (
          <div key={stat.label} className="space-y-2">
            <h2 className="text-4xl font-bold text-primary">{stat.number}</h2>
            <p className="text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Newsletter & Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Stay Updated</h2>
          <p className="text-muted-foreground">
            Subscribe to our newsletter to receive updates about our work and upcoming events.
          </p>
          <NewsletterForm />
        </div>
        <ContactInfo />
      </section>
    </div>
  );
}
