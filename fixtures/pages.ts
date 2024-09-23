import { test as base } from '@playwright/test';
import CartPage from '../pages/cart';
import ProductPage from '../pages/product';
import HeaderPage from '../pages/header';
import HomePage from '../pages/home';

type PageObjectFixtures = {
  homePage: HomePage;
  cartPage: CartPage;
  productPage: ProductPage;
  headerPage: HeaderPage;
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

  headerPage: async ({ page }, use) => {
    await use(new HeaderPage(page));
  },
});

export { expect } from '@playwright/test';
