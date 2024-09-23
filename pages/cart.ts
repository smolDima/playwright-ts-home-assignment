import { expect, Locator, Page } from '@playwright/test';

export default class CartPage {
  private page: Page;
  private tableProductsLocator: Locator;
  private productLocator: Locator;
  private deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tableProductsLocator = page.locator('[id="tbodyid"]');
    this.productLocator = page.locator('[class="success"]');
    this.deleteButton = page.getByRole('link', { name: 'Delete' });
  }

  public async validateItemExists(productName: string) {
    await expect(this.tableProductsLocator).toBeVisible();
    await expect(
      this.productLocator.filter({ hasText: productName })
    ).toBeVisible();
  }

  public async clickDeleteButton() {
    await this.deleteButton.click();
  }

  public async validateCartIsEmpty() {
    await expect(this.productLocator).toHaveCount(0);
  }
}
