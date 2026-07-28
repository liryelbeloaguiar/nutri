import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-hero-section',
  imports: [Icon],
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  protected readonly content = SITE_CONTENT.hero;
  protected readonly experience = SITE_CONTENT.statistics[0];
  protected readonly professionalCouncil = SITE_CONTENT.profile.professionalRegistry.split(' ')[0];
}
