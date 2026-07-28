import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-practice-areas-section',
  imports: [Icon],
  templateUrl: './practice-areas-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracticeAreasSection {
  protected readonly areas = SITE_CONTENT.practiceAreas;
}
