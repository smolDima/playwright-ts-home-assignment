import { Locator, Page } from '@playwright/test';
import { HeaderButtons } from '@constraints/header-buttons';

export default class HeaderComponent {
  private page: Page;
  private headerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerButton = page.locator('[class="nav-link"]');
  }

  public async clickOnTheHeaderButton(headerButtonName: HeaderButtons) {
    await this.headerButton.filter({ hasText: headerButtonName }).click();
  }
}
