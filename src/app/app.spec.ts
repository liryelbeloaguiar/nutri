import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('cria a aplicação', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renderiza as seções principais', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#inicio h1')?.textContent).toContain('Alimentação possível');
    expect(element.querySelector('#areas')).toBeTruthy();
    expect(element.querySelector('#depoimentos')).toBeTruthy();
    expect(element.querySelector('#contato form')).toBeTruthy();
  });
});
