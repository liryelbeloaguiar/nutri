import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-about-section',
  imports: [Icon],
  templateUrl: './about-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  protected readonly profile = SITE_CONTENT.profile;
  protected readonly statistics = SITE_CONTENT.statistics;
}
