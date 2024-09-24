import { test as base } from '@playwright/test';
import HomePage from '@pages/home';
import CartPage from '@pages/cart';
import ProductPage from '@pages/product';
import HeaderComponent from '@components/header-buttons';

type PageObjectFixtures = {
  homePage: HomePage;
  cartPage: CartPage;
  productPage: ProductPage;
  headerComponent: HeaderComponent;
};

export const test = base.extend<PageObjectFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
});

export { expect } from '@playwright/test';
