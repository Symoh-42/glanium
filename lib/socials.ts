import type { ImageKey } from "./images";

export type SocialPost = {
  platform: "instagram" | "tiktok" | "x";
  caption: string;
  category: string;
  topic: ImageKey;
};

export const socialPosts: SocialPost[] = [
  { platform: "instagram", caption: "Workshop fabrication in progress", category: "Workshop", topic: "metalDetail" },
  { platform: "tiktok", caption: "Powder-coated finish, close up", category: "Finishing", topic: "steelBeams" },
  { platform: "instagram", caption: "Steel gate installation", category: "Gates", topic: "gateSliding" },
  { platform: "x", caption: "Aluminium window fabrication update", category: "Aluminium", topic: "aluminiumWindow" },
  { platform: "instagram", caption: "Completed sliding gate", category: "Gates", topic: "gateDaytime" },
  { platform: "tiktok", caption: "Slim-frame steel window detail", category: "Steel", topic: "casementWindow" },
];
