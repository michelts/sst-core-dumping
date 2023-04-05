import fetch from 'node-fetch';
import { expect, it } from 'vitest';

it('API test', async () => {
  const response = await fetch('https://ls3h8ove70.execute-api.us-east-1.amazonaws.com');
  const data = await response.json();
  expect(data.body).toMatch(/hello world/i);
});
