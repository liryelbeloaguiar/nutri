import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AboutSection } from './features/home/sections/about-section/about-section';
import { ContactSection } from './features/home/sections/contact-section/contact-section';
import { HeroSection } from './features/home/sections/hero-section/hero-section';
import { PracticeAreasSection } from './features/home/sections/practice-areas-section/practice-areas-section';
import { QuoteSection } from './features/home/sections/quote-section/quote-section';
import { TestimonialsSection } from './features/home/sections/testimonials-section/testimonials-section';
import { FloatingContact } from './layout/floating-contact/floating-contact';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    HeroSection,
    AboutSection,
    PracticeAreasSection,
    QuoteSection,
    TestimonialsSection,
    ContactSection,
    SiteFooter,
    FloatingContact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class App {}
