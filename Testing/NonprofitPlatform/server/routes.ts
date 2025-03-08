import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Members routes
  app.get("/api/members", async (req, res) => {
    const members = await storage.getMembers();
    res.json(members);
  });

  app.get("/api/members/:id", async (req, res) => {
    const member = await storage.getMember(Number(req.params.id));
    if (!member) {
      res.status(404).json({ message: "Member not found" });
      return;
    }
    res.json(member);
  });

  // Sponsors routes
  app.get("/api/sponsors", async (req, res) => {
    const sponsors = await storage.getSponsors();
    res.json(sponsors);
  });

  app.get("/api/sponsors/:id", async (req, res) => {
    const sponsor = await storage.getSponsor(Number(req.params.id));
    if (!sponsor) {
      res.status(404).json({ message: "Sponsor not found" });
      return;
    }
    res.json(sponsor);
  });

  // Newsletter signup
  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.addNewsletter(data);
      res.status(201).json(newsletter);
    } catch (error) {
      res.status(400).json({ message: "Invalid newsletter data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
