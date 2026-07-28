import { inject, Injectable, InjectionToken } from '@angular/core';
import { of } from 'rxjs';
import { SITE_CONTENT } from '../../../core/site-content';
import type { Observable } from 'rxjs';
import type { ContactRequest, ContactSubmissionResult } from './contact.models';

export type ExternalNavigator = (url: string) => void;

export const EXTERNAL_NAVIGATOR = new InjectionToken<ExternalNavigator>('EXTERNAL_NAVIGATOR', {
  providedIn: 'root',
  factory: () => (url: string) => {
    globalThis.open?.(url, '_blank', 'noopener,noreferrer');
  },
});

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly navigate = inject(EXTERNAL_NAVIGATOR);

  createWhatsAppUrl(request: ContactRequest): string {
    const fallbackMessage = 'Olá, gostaria de agendar uma consulta nutricional.';
    const message = [
      'Olá, gostaria de agendar uma consulta nutricional.',
      '',
      `Nome: ${request.name.trim()}`,
      `Telefone: ${request.phone.trim()}`,
      `E-mail: ${request.email.trim()}`,
      `Objetivo: ${request.area.trim()}`,
      `Observações: ${request.message.trim() || fallbackMessage}`,
    ].join('\n');

    const phone = SITE_CONTENT.profile.phoneHref.replace(/\D/g, '');
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  submit(request: ContactRequest): Observable<ContactSubmissionResult> {
    this.navigate(this.createWhatsAppUrl(request));
    return of({ status: 'accepted' });
  }
}
