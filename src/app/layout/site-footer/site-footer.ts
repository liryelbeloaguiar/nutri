import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../core/site-content';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-site-footer',
  imports: [Icon],
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly content = SITE_CONTENT;
  protected readonly year = new Date().getFullYear();
}
