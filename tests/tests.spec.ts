import { HeaderButtons } from '@constraints/header-buttons';
import { Category } from '@constraints/categories';
import { test } from '@fixtures/pages';

test.describe('Adding and removing a product from cart', () => {
  const productName = 'Nexus 6';

  test.beforeEach(async ({ homePage, productPage, headerComponent }) => {
    await homePage.openHomePage();
    await homePage.clickOnTheProductLinkByName(productName);
    await productPage.clickOnAddToCartButton();
    await headerComponent.clickOnTheHeaderButton(HeaderButtons.Cart);
  });

  test('Scenario 1: Add a Product to Cart', async ({
    cartPage,
    browserName,
  }) => {
    test.skip(browserName !== 'firefox', 'Firefox only!');
    await cartPage.validateItemExists(productName);
  });

  test('Scenario 2: Remove a Product from Cart', async ({ cartPage }) => {
    await cartPage.clickDeleteButton();
    await cartPage.validateCartIsEmpty();
  });
});

test.describe('Navigation on Home page', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'chromium only!');
  const productName = 'Dell 15.6 Inch';
  const productPrice = '$700';

  test.beforeEach(async ({ homePage }) => {
    await homePage.openHomePage();
  });

  test('Scenario 4: Navigation and Page Content Verification', async ({
    homePage,
  }) => {
    await homePage.clickOnCategoryByName(Category.Laptops);
    await homePage.validateNumberProductsGreaterThan(0);
    await homePage.verifyProductTitleIsVisibleByProductName(productName);
    await homePage.verifyProductPriceIsVisibleByProductNam(
      productName,
      productPrice
    );
  });
});
