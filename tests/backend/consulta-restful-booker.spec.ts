import { test, expect } from '@playwright/test';

test('CP-007 - Consultar reservas mediante API Restful Booker', async ({ request }) => {

  // 1. Realizar petición GET al endpoint de reservas
  const response = await request.get(
    'https://restful-booker.herokuapp.com/booking'
  );

  // 2. Validar código de respuesta
  expect(response.status()).toBe(200);

  // 3. Obtener respuesta
  const reservas = await response.json();

  // 4. Validar que la respuesta sea un arreglo
  expect(Array.isArray(reservas)).toBeTruthy();

  // 5. Validar que existan reservas
  expect(reservas.length).toBeGreaterThan(0);

  console.log('Cantidad de reservas:', reservas.length);

});