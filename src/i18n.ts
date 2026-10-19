import fr from './content/fr.json';
import en from './content/en.json';
import site from './content/site.json';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export type Content = typeof fr;

const content: Record<Locale, Content> = { fr, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}

export function homePath(locale: Locale): string {
  return locale === 'fr' ? '/' : '/en/';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function emailUrl(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export { site };
