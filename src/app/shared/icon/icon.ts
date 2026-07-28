import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  LucideArrowRight,
  LucideActivity,
  LucideApple,
  LucideClipboardList,
  LucideClock,
  LucideHeartPulse,
  LucideLeaf,
  LucideLeafyGreen,
  LucideMail,
  LucideMapPin,
  LucideMenu,
  LucideMessageCircle,
  LucidePhone,
  LucideSalad,
  LucideSprout,
  LucideTarget,
  LucideX,
} from '@lucide/angular';

@Component({
  selector: 'app-icon',
  imports: [
    LucideArrowRight,
    LucideActivity,
    LucideApple,
    LucideClipboardList,
    LucideClock,
    LucideHeartPulse,
    LucideLeaf,
    LucideLeafyGreen,
    LucideMail,
    LucideMapPin,
    LucideMenu,
    LucideMessageCircle,
    LucidePhone,
    LucideSalad,
    LucideSprout,
    LucideTarget,
    LucideX,
  ],
  template: `
    @switch (name()) {
      @case ('menu') {
        <svg lucideMenu size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('close') {
        <svg lucideX size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('phone') {
        <svg lucidePhone size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('message') {
        <svg lucideMessageCircle size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('mail') {
        <svg lucideMail size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('location') {
        <svg lucideMapPin size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('clock') {
        <svg lucideClock size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('arrow') {
        <svg lucideArrowRight size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('clinical') {
        <svg lucideHeartPulse size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('women') {
        <svg lucideSprout size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('sports') {
        <svg lucideActivity size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('weight') {
        <svg lucideTarget size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('vegetarian') {
        <svg lucideLeafyGreen size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('reeducation') {
        <svg lucideSalad size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('leaf') {
        <svg lucideLeaf size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('apple') {
        <svg lucideApple size="100%" [strokeWidth]="strokeWidth" />
      }
      @case ('heart') {
        <svg lucideHeartPulse size="100%" [strokeWidth]="strokeWidth" />
      }
      @default {
        <svg lucideClipboardList size="100%" [strokeWidth]="strokeWidth" />
      }
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      width: 1.35rem;
      height: 1.35rem;
      flex: 0 0 auto;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<string>();
  protected readonly strokeWidth = 1.75;
}
