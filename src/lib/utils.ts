// lib/utils.ts
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(...inputs);
}