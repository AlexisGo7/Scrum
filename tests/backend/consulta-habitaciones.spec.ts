import { test, expect } from '@playwright/test';

test('CP-005 - Consultar habitaciones mediante API', async ({ request }) => {

  // 1. Realizar petición GET
  const response = await request.get(
    'https://automationintesting.online/api/room/'
  );

  // 2. Validar código de respuesta
  expect(response.status()).toBe(200);

  // 3. Obtener respuesta
  const habitaciones = await response.json();

  // 4. Validar que exista la propiedad rooms
  expect(habitaciones.rooms).toBeDefined();

  // 5. Validar que rooms sea un arreglo
  expect(Array.isArray(habitaciones.rooms)).toBeTruthy();

  // 6. Validar que existan habitaciones
  expect(habitaciones.rooms.length).toBeGreaterThan(0);

  console.log('Cantidad de habitaciones:', habitaciones.rooms.length);

});