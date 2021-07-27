import { format, formatDistance } from "date-fns";

export function relativeDate(date: Date): string {
  return formatDistance(date, new Date());
}

export function formatDate(date: Date): string {
  return format(date, "MMMM d, Y");
}
