import { expect, Locator, Page } from '@playwright/test';
import { HeaderButtons } from '../constants/header-buttons';

export default class HeaderPage {
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
