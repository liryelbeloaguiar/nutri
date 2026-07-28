import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SITE_CONTENT } from '../../../../core/site-content';
import { ContactService } from '../contact.service';

type FormStatus = 'idle' | 'sending' | 'accepted' | 'error';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactForm {
  private readonly contactService = inject(ContactService);

  protected readonly status = signal<FormStatus>('idle');
  protected readonly practiceAreas = SITE_CONTENT.practiceAreas;
  protected readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[\d\s()+-]{10,20}$/)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    area: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(1000)],
    }),
    consent: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  protected invalid(name: keyof ContactForm['form']['controls']): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || control.dirty);
  }

  protected submit(): void {
    if (this.form.invalid || this.status() === 'sending') {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    this.contactService.submit(this.form.getRawValue()).subscribe({
      next: (result) => this.status.set(result.status),
      error: () => this.status.set('error'),
    });
  }
}
