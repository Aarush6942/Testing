import { Link, useLocation } from "wouter";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [location] = useLocation();
  return (
    <NavigationMenuItem>
      <Link href={href}>
        <a className={cn(
          "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
          location === href ? "text-primary" : "text-muted-foreground"
        )}>
          {children}
        </a>
      </Link>
    </NavigationMenuItem>
  );
};

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <NavigationMenu className="h-16">
          <NavigationMenuList className="flex items-center space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/members">Members</NavLink>
            <NavLink href="/sponsors">Sponsors</NavLink>
            <NavLink href="/information">Information</NavLink>
            <NavLink href="/donate">Donate</NavLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
