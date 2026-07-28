export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface PracticeArea {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface Statistic {
  readonly value: string;
  readonly label: string;
}

export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly role: string;
}

export interface ContactItem {
  readonly icon: string;
  readonly title: string;
  readonly lines: readonly string[];
  readonly href?: string;
}

export interface NutritionistProfile {
  readonly name: string;
  readonly shortName: string;
  readonly professionalRegistry: string;
  readonly biography: readonly string[];
  readonly phone: string;
  readonly phoneHref: string;
  readonly whatsappUrl: string;
  readonly email: string;
  readonly location: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly titleStart: string;
  readonly titleEmphasis: string;
  readonly titleEnd: string;
  readonly description: string;
}

export interface InstitutionalQuote {
  readonly text: string;
  readonly attribution: string;
}

export interface SiteContent {
  readonly profile: NutritionistProfile;
  readonly hero: HeroContent;
  readonly navigation: readonly NavigationItem[];
  readonly practiceAreas: readonly PracticeArea[];
  readonly statistics: readonly Statistic[];
  readonly testimonials: readonly Testimonial[];
  readonly contacts: readonly ContactItem[];
  readonly quote: InstitutionalQuote;
}
