import fetch from 'node-fetch';
import { expect, it } from 'vitest';

it('API test', async () => {
  const response = await fetch('https://i64u4st2t2.execute-api.us-east-1.amazonaws.com')
  const data = await response.json();
  expect(data.body).toMatch(/hello world/i);
});
