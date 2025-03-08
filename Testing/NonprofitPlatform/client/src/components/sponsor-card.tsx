import { type Sponsor } from "@shared/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="h-24 w-24 mx-auto mb-4">
          <img src={sponsor.logoUrl} alt={sponsor.name} className="h-full w-full object-contain" />
        </div>
        <CardTitle>{sponsor.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription>{sponsor.description}</CardDescription>
        <Button asChild variant="outline" className="w-full">
          <a href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-center gap-2">
            Visit Website
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
