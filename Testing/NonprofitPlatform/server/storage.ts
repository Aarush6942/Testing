import { 
  Member, InsertMember,
  Sponsor, InsertSponsor,
  Newsletter, InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  // Members
  getMembers(): Promise<Member[]>;
  getMember(id: number): Promise<Member | undefined>;
  createMember(member: InsertMember): Promise<Member>;

  // Sponsors
  getSponsors(): Promise<Sponsor[]>;
  getSponsor(id: number): Promise<Sponsor | undefined>;
  createSponsor(sponsor: InsertSponsor): Promise<Sponsor>;

  // Newsletter
  addNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private members: Map<number, Member>;
  private sponsors: Map<number, Sponsor>;
  private newsletters: Map<number, Newsletter>;
  private currentIds: { members: number; sponsors: number; newsletters: number };

  constructor() {
    this.members = new Map();
    this.sponsors = new Map();
    this.newsletters = new Map();
    this.currentIds = { members: 1, sponsors: 1, newsletters: 1 };

    // Add some initial data
    this.initializeData();
  }

  private initializeData() {
    const initialMembers: InsertMember[] = [
        {
            name: "John Doe",
            title: "Executive Director",
            bio: "10+ years of nonprofit leadership experience",
            imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
            role: "Leadership"
        },
        {
            name: "Jane Smith",
            title: "Program Manager",
            bio: "Passionate about community development",
            imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
            role: "Programs"
        },
        {
            name: "Dr. Michael Chen",
            title: "Medical Director",
            bio: "Specialized in emergency medicine with global health experience",
            imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
            role: "Medical"
        },
        {
            name: "Sarah Johnson",
            title: "Outreach Coordinator",
            bio: "Dedicated to building community partnerships",
            imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
            role: "Outreach"
        },
        {
            name: "David Rodriguez",
            title: "Supply Chain Manager",
            bio: "Expert in medical supply logistics and distribution",
            imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
            role: "Operations"
        },
        {
            name: "Emily Williams",
            title: "Volunteer Coordinator",
            bio: "Organizing and training volunteer medical teams",
            imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
            role: "Volunteers"
        },
        {
            name: "Dr. Lisa Thompson",
            title: "Training Director",
            bio: "Developing medical training programs for communities",
            imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
            role: "Education"
        }
    ];

    const initialSponsors: InsertSponsor[] = [
        {
            name: "Tech Corp",
            description: "Leading technology solutions provider",
            logoUrl: "https://api.dicebear.com/7.x/initials/svg?seed=TC",
            websiteUrl: "https://example.com"
        },
        {
            name: "MedTech Solutions",
            description: "Leading provider of medical equipment and supplies",
            logoUrl: "https://api.dicebear.com/7.x/initials/svg?seed=MTS",
            websiteUrl: "https://example.com/medtech"
        },
        {
            name: "Global Health Foundation",
            description: "International healthcare advocacy organization",
            logoUrl: "https://api.dicebear.com/7.x/initials/svg?seed=GHF",
            websiteUrl: "https://example.com/ghf"
        },
        {
            name: "PharmaCare International",
            description: "Pharmaceutical research and development company",
            logoUrl: "https://api.dicebear.com/7.x/initials/svg?seed=PCI",
            websiteUrl: "https://example.com/pharma"
        }
    ];

    initialMembers.forEach(member => this.createMember(member));
    initialSponsors.forEach(sponsor => this.createSponsor(sponsor));
}

  async getMembers(): Promise<Member[]> {
    return Array.from(this.members.values());
  }

  async getMember(id: number): Promise<Member | undefined> {
    return this.members.get(id);
  }

  async createMember(member: InsertMember): Promise<Member> {
    const id = this.currentIds.members++;
    const newMember = { ...member, id };
    this.members.set(id, newMember);
    return newMember;
  }

  async getSponsors(): Promise<Sponsor[]> {
    return Array.from(this.sponsors.values());
  }

  async getSponsor(id: number): Promise<Sponsor | undefined> {
    return this.sponsors.get(id);
  }

  async createSponsor(sponsor: InsertSponsor): Promise<Sponsor> {
    const id = this.currentIds.sponsors++;
    const newSponsor = { ...sponsor, id };
    this.sponsors.set(id, newSponsor);
    return newSponsor;
  }

  async addNewsletter(newsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentIds.newsletters++;
    const newNewsletter = { ...newsletter, id };
    this.newsletters.set(id, newNewsletter);
    return newNewsletter;
  }
}

export const storage = new MemStorage();