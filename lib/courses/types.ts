export const campuses = ["nu", "cps", "law"] as const;
export type Campus = typeof campuses[number];
