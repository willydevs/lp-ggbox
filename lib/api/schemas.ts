import { z } from 'zod';

export const DownloadLinkSchema = z.object({
  part: z.number(),
  part_number: z.number(),
  url: z.string().url(),
  is_correction: z.boolean(),
  label: z.string().nullable(),
});

export const GameSchema = z.object({
  id: z.number(),
  name: z.string(),
  system: z.string(),
  system_id: z.string().optional().default(''),
  region: z.string().nullable().optional(),
  size_label: z.string().nullable().optional(),
  cover_url: z.string().nullable().optional(),
  video_url: z.string().nullable().optional(),
  links: z.array(DownloadLinkSchema).default([]),
});

export const CatalogResponseSchema = z.object({
  system: z.string(),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  pages: z.number(),
  games: z.array(GameSchema),
});

export const PackSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  system: z.string(),
  system_id: z.string().optional(),
  tier: z.enum(['standard', 'gold', 'updates']),
  pack_type: z.string().optional(),
  size_label: z.string().optional(),
  password: z.string().nullable().optional(),
  resolver: z.string().nullable().optional(),
  games: z.array(z.string()).default([]),
  url: z.string().nullable().optional(),
  links: z.array(DownloadLinkSchema).default([]),
});

export const PacksResponseSchema = z.object({
  version: z.number().optional(),
  total: z.number(),
  packs: z.array(PackSchema),
});

export type GameSchema = z.infer<typeof GameSchema>;
export type CatalogResponseSchema = z.infer<typeof CatalogResponseSchema>;
export type PackSchema = z.infer<typeof PackSchema>;
