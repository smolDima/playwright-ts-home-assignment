import { Locator, Page } from '@playwright/test';

export default class ProductPage {
  private page: Page;
  private addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
  }

  public async clickOnAddToCartButton() {
    await this.addToCartButton.click();
    await this.page.waitForTimeout(1000);
  }
}
