import { Page, Request } from '@playwright/test';

export async function waitForRequestByUrlAndMethod(
  page: Page,
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
): Promise<Request> {
  try {
    return await page.waitForRequest(
      (request) => request.url() === url && request.method() === method
    );
  } catch (error) {
    throw new Error(`Failed to wait for request`);
  }
}

export function validatePostBody(
  request: Request,
  expectedKeys: string[]
): boolean {
  const postData = request.postData();

  if (!postData) {
    throw new Error('Post data is null or undefined');
  }

  try {
    const jsonData = JSON.parse(postData);
    const allKeysMatch =
      expectedKeys.length === Object.keys(jsonData).length &&
      expectedKeys.every((key) => key in jsonData);

    return allKeysMatch;
  } catch (error) {
    throw new Error('Failed to parse post data as JSON');
  }
}
