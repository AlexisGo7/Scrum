import { test, expect } from '@playwright/test';

test('CP-006 - Consultar una habitación inexistente mediante API', async ({ request }) => {

  // 1. Realizar petición GET con un ID de habitación inexistente
  const response = await request.get(
    'https://automationintesting.online/api/room/9999'
  );

  // 2. Mostrar el código de respuesta
  console.log('Código de respuesta:', response.status());

  // 3. Validar que el sistema no responda con código exitoso
  expect(response.status()).not.toBe(200);

});