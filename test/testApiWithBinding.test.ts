import fetch from 'node-fetch';
import { Api } from 'sst/node/api';
import { expect, it } from 'vitest';

it('API test', async () => {
  console.log(Api.api.url);
  const response = await fetch(Api.api.url);
  const data = await response.json();
  expect(data.body).toMatch(/hello world/i);
});
