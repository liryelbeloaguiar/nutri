import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../../../core/site-content';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteSection {
  protected readonly quote = SITE_CONTENT.quote;
}
