import { z } from "zod";

export const clientTypes = [
  "Homeowner",
  "Architect",
  "Contractor",
  "Developer",
  "Business",
  "Other",
] as const;

export const projectTypes = [
  "Residential",
  "Commercial",
  "Renovation",
  "New Construction",
  "Other",
] as const;

export const requiredServices = [
  "Aluminium",
  "Steel",
  "Gate",
  "Windows",
  "Doors",
  "Structures",
  "Powder Coating",
  "Custom Fabrication",
  "Other",
] as const;

export const projectStages = [
  "Planning",
  "Construction",
  "Finishing",
  "Renovation",
] as const;

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  clientType: z.enum(clientTypes),
  projectType: z.enum(projectTypes),
  requiredService: z.enum(requiredServices),
  projectLocation: z.string().min(2, "Please enter the project location"),
  projectStage: z.enum(projectStages),
  description: z.string().min(10, "Please tell us a little more about your project"),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please enter your message"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const developerFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.enum(projectTypes),
  projectLocation: z.string().min(2, "Please enter the project location"),
  requiredService: z.enum(requiredServices),
  estimatedScope: z.string().min(2, "Please describe the estimated scope"),
  message: z.string().min(10, "Please tell us more about the project"),
});

export type DeveloperFormValues = z.infer<typeof developerFormSchema>;
