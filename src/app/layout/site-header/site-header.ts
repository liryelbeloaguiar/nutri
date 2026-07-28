import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { SITE_CONTENT } from '../../core/site-content';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-site-header',
  imports: [Icon],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly navigation = SITE_CONTENT.navigation;
  protected readonly profile = SITE_CONTENT.profile;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected closeMenuWithEscape(): void {
    this.closeMenu();
  }
}
