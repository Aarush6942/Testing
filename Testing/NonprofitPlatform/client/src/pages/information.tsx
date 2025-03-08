import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Understanding Our Impact",
    summary: "A detailed look at how our programs affect the community",
    link: "https://example.com/article1",
    type: "simple"
  },
  {
    title: "Research on Community Development",
    summary: "Academic research supporting our methodology",
    link: "https://example.com/article2",
    type: "scholarly"
  },
  {
    title: "The Importance of Local Support",
    summary: "How community involvement drives change",
    link: "https://example.com/article3",
    type: "simple"
  }
];

export default function Information() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Learn More</h1>
        <p className="text-muted-foreground mt-2">
          Discover why our work matters through these resources
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Featured Articles</h2>
            <div className="grid gap-4">
              {articles.map((article) => (
                <div key={article.title} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-medium">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {article.summary}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={article.link} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2">
                        Read
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I get involved?</AccordionTrigger>
                <AccordionContent>
                  There are many ways to get involved! You can volunteer, donate, or become a sponsor.
                  Contact us to learn more about these opportunities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Where do donations go?</AccordionTrigger>
                <AccordionContent>
                  Your donations directly support our community programs, including educational
                  initiatives and local support services.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What areas do you serve?</AccordionTrigger>
                <AccordionContent>
                  We primarily serve the local community but are expanding our reach to
                  neighboring areas as well.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
