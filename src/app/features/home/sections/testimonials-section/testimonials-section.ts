import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../../../core/site-content';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSection {
  protected readonly testimonials = SITE_CONTENT.testimonials;
}
