import { TestBed } from '@angular/core/testing';
import { EXTERNAL_NAVIGATOR } from '../contact.service';
import { ContactForm } from './contact-form';

describe('ContactForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactForm],
      providers: [{ provide: EXTERNAL_NAVIGATOR, useValue: () => undefined }],
    }).compileComponents();
  });

  it('impede o envio de um formulário inválido', () => {
    const fixture = TestBed.createComponent(ContactForm);
    const component = fixture.componentInstance as unknown as {
      submit(): void;
    };
    component.submit();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('small').length).toBeGreaterThan(0);
  });

  it('informa quando os dados válidos são preparados para o WhatsApp', () => {
    const fixture = TestBed.createComponent(ContactForm);
    const component = fixture.componentInstance as unknown as {
      form: { setValue(value: Record<string, unknown>): void };
      submit(): void;
    };
    component.form.setValue({
      name: 'Maria da Silva',
      phone: '(84) 99999-9999',
      email: 'maria@example.com',
      area: 'Nutrição clínica',
      message: 'Gostaria de orientação sobre um contrato de prestação de serviços.',
      consent: true,
    });
    component.submit();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role=status]')?.textContent).toContain('WhatsApp');
  });
});
