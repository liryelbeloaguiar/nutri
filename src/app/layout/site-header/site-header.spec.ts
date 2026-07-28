import { TestBed } from '@angular/core/testing';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SiteHeader] }).compileComponents();
  });

  it('abre e fecha o menu móvel', () => {
    const fixture = TestBed.createComponent(SiteHeader);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.menu-toggle') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
