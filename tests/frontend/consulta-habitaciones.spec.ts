import { test, expect } from '@playwright/test';

test('CP-004 - Consultar información de las habitaciones', async ({ page }) => {

  // 1. Ingresar al sistema
  await page.goto('https://automationintesting.online/');

  // 2. Ir a la sección Rooms
  await page.locator('#navbarNav')
    .getByRole('link', { name: 'Rooms' })
    .click();

  // 3. Verificar que la sección de habitaciones esté visible
  await expect(
    page.getByRole('heading', { name: 'Our Rooms' })
  ).toBeVisible();

  // 4. Verificar que existan habitaciones para reservar
  const botonesReserva = page.getByRole('link', { name: 'Book now' });

  await expect(botonesReserva.first()).toBeVisible();

  // 5. Verificar que existan varias habitaciones
  expect(await botonesReserva.count()).toBeGreaterThan(0);

});