import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { ContactService, EXTERNAL_NAVIGATOR } from './contact.service';

describe('ContactService', () => {
  let openedUrl = '';

  beforeEach(() => {
    openedUrl = '';
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        {
          provide: EXTERNAL_NAVIGATOR,
          useValue: (url: string) => {
            openedUrl = url;
          },
        },
      ],
    });
  });

  it('abre o WhatsApp com os dados preenchidos e codificados', async () => {
    const service = TestBed.inject(ContactService);
    const result = await firstValueFrom(
      service.submit({
        name: 'Maria da Silva',
        phone: '(84) 99999-9999',
        email: 'maria@example.com',
        area: 'Nutrição clínica',
        message: 'Quero organizar melhor minhas refeições.',
        consent: true,
      }),
    );
    const decodedUrl = decodeURIComponent(openedUrl);

    expect(result.status).toBe('accepted');
    expect(decodedUrl).toContain('https://wa.me/5584987383844');
    expect(decodedUrl).toContain('Nome: Maria da Silva');
    expect(decodedUrl).toContain('Objetivo: Nutrição clínica');
    expect(decodedUrl).toContain('Quero organizar melhor minhas refeições.');
  });

  it('usa mensagem genérica quando a descrição não é preenchida', () => {
    const service = TestBed.inject(ContactService);
    const url = service.createWhatsAppUrl({
      name: 'João da Silva',
      phone: '(84) 99999-9999',
      email: 'joao@example.com',
      area: 'Reeducação alimentar',
      message: '   ',
      consent: true,
    });

    expect(decodeURIComponent(url)).toContain(
      'Observações: Olá, gostaria de agendar uma consulta nutricional.',
    );
  });
});
