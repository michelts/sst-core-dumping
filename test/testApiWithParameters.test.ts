import fetch from 'node-fetch';
import { Config } from 'sst/node/config';
import { expect, it } from 'vitest';

it('API test', async () => {
  console.log(Config.API_URL);
  const response = await fetch(Config.API_URL);
  const data = await response.json();
  expect(data.body).toMatch(/hello world/i);
});
