// lib/utils.ts (or wherever you keep utils)

export function cn(...classes: Array<string | undefined | null | boolean>) {
    return classes.filter(Boolean).join(' ');
  }
  