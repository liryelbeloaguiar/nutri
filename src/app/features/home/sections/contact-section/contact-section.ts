import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../../../core/site-content';
import { ContactForm } from '../../contact/contact-form/contact-form';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-contact-section',
  imports: [ContactForm, Icon],
  templateUrl: './contact-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly contacts = SITE_CONTENT.contacts;
}
