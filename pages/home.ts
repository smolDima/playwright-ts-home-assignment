import { expect, Locator, Page } from '@playwright/test';
import { Category } from '../constants/categories';

export default class HomePage {
  private page: Page;
  private productLinkLocator: Locator;
  private categoriesTitleLocator: Locator;
  private productCard: Locator;
  private productPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productLinkLocator = page.getByRole('link');
    this.categoriesTitleLocator = page.locator('[id="itemc"]');
    this.productCard = page.locator('[class="card-block"]');
    this.productPrice = page.getByRole('heading');
  }

  public async openHomePage() {
    await this.page.goto('/');
  }

  public async clickOnTheProductLinkByName(productName: string) {
    await this.productLinkLocator.filter({ hasText: productName }).click();
  }

  public async clickOnCategoryByName(categoryName: Category) {
    await this.categoriesTitleLocator.filter({ hasText: categoryName }).click();
  }

  public async validateNumberProductsGreaterThan(number: number) {
    const cards = this.productCard;
    await cards.first().waitFor({ state: 'visible' });

    const count = await this.productCard.count();

    expect(count).toBeGreaterThan(number);
  }

  public async verifyProductTitleIsVisibleByProductName(productName: string) {
    await expect(
      this.productLinkLocator.filter({ hasText: productName })
    ).toBeVisible();
  }

  public async verifyProductPriceIsVisibleByProductNam(
    productName: string,
    productPrice: string
  ) {
    const productByName = await this.productCard
      .filter({ has: this.productLinkLocator.filter({ hasText: productName }) })
      .filter({ has: this.productPrice.filter({ hasText: productPrice }) });

    await expect(productByName).toBeVisible();
  }
}
