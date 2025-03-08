import { useQuery } from "@tanstack/react-query";
import MemberCard from "@/components/member-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Member } from "@shared/schema";

function MemberCardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-24 w-24 rounded-full mx-auto" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-1/2 mx-auto" />
      <Skeleton className="h-20 w-full" />
    </div>
  );
}

export default function Members() {
  const { data: members, isLoading } = useQuery<Member[]>({
    queryKey: ["/api/members"]
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Our Team</h1>
        <p className="text-muted-foreground mt-2">
          Meet the dedicated individuals who make our mission possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <MemberCardSkeleton key={i} />
            ))
          : members?.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
      </div>
    </div>
  );
}
