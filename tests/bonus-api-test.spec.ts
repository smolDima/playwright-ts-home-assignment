import {
  validatePostBody,
  waitForRequestByUrlAndMethod,
} from '@utils/api-helper';
import { expect, test } from '@fixtures/pages';

test.describe('Bonus Tasks: API Test', () => {
  const expectedJsonBodyKeys = ['id', 'cookie', 'prod_id', 'flag'];
  const productName = 'Samsung galaxy s6';
  const url = 'https://api.demoblaze.com/addtocart';
  const method = 'POST';

  test('Validate the correct API call is made when adding a product to the cart', async ({
    page,
    homePage,
    productPage,
    browserName,
  }) => {
    test.skip(browserName !== 'chromium', 'Chrome only!');

    await homePage.openHomePage();
    await homePage.clickOnTheProductLinkByName(productName);

    const requestPromise = waitForRequestByUrlAndMethod(page, url, method);

    await productPage.clickOnAddToCartButton();

    const request = await requestPromise;
    const isValidated = validatePostBody(request, expectedJsonBodyKeys);
    expect(isValidated).toBeTruthy();
  });
});
