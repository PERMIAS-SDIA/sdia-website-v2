import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildImageUrl(filename?: string): string {
  if (!filename) return "/placeholder.svg";
  if (/^https?:\/\//i.test(filename)) return filename;
  // For now, we'll assume images are stored in the public folder
  // TODO: Adjust this based on actual image storage setup
  return `/images/${filename}`;
}