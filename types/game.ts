export interface DownloadLink {
  part: number;
  part_number: number;
  url: string;
  is_correction: boolean;
  label: string | null;
}

export interface Game {
  id: number;
  name: string;
  system: string;
  system_id: string;
  region?: string | null;
  size_label?: string | null;
  cover_url?: string | null;
  video_url?: string | null;
  links: DownloadLink[];
}

export interface CatalogResponse {
  system: string;
  total: number;
  page: number;
  limit: number;
  pages: number;
  games: Game[];
}

export interface GameFilters {
  system?: string;
  q?: string;
  page?: number;
  limit?: number;
  pack_id?: string;
}
