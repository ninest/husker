export interface Category {
  name: string;
  slug: string;
  sheetId: string;
  description?: string;
  resources?: Resource[];
}
export interface Resource {
  name: string;
  url: string;
  description?: string;
  notes?: string;
}
