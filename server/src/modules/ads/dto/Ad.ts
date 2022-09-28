import { Ad as PrismaAd } from "@prisma/client";

export type Ad = PrismaAd;

export type AdList = Omit<PrismaAd, "hourStart" | "hourEnd"> | { hourStart: string, hourEnd: string };