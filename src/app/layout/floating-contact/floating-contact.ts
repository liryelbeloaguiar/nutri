import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../core/site-content';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-floating-contact',
  imports: [Icon],
  template: `
    <a
      class="floating-contact"
      [href]="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar atendimento pelo WhatsApp"
    >
      <app-icon name="message" />
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingContact {
  protected readonly whatsappUrl = SITE_CONTENT.profile.whatsappUrl;
}
