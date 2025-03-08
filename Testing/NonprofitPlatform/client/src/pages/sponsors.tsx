import { useQuery } from "@tanstack/react-query";
import SponsorCard from "@/components/sponsor-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Sponsor } from "@shared/schema";

function SponsorCardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-24 w-24 mx-auto" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export default function Sponsors() {
  const { data: sponsors, isLoading } = useQuery<Sponsor[]>({
    queryKey: ["/api/sponsors"]
  });

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Our Sponsors</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're grateful for the support of our sponsors who help make our work possible.
        </p>
        <Button size="lg">
          <a href="mailto:sponsorship@nonprofit.org">
            Become a Sponsor
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <SponsorCardSkeleton key={i} />
            ))
          : sponsors?.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
      </div>
    </div>
  );
}
