import { test, expect } from '@playwright/test';

test('CP-002 - Realizar reserva correctamente', async ({ page }) => {

  await page.goto('https://automationintesting.online/');

  await page.locator('#navbarNav')
    .getByRole('link', { name: 'Rooms' })
    .click();

  await page.getByRole('link', { name: 'Book now' }).nth(2).click();

  await page.waitForTimeout(3000);

  // Seleccionar fechas
  await page.locator(
    'div:nth-child(3) > .rbc-row-bg > div:nth-child(4)'
  ).click();

await page.getByRole('button', { name: '16' }).click();
await page.getByRole('cell', { name: '25' }).click();

  // Continuar
  await page.getByRole('button', { name: 'Reserve Now' }).click();

  // Datos
  await page.getByRole('textbox', { name: 'Firstname' })
    .fill('Alexis');

  await page.getByRole('textbox', { name: 'Lastname' })
    .fill('Castaño');

  await page.getByRole('textbox', { name: 'Email' })
    .fill(`alexis.${Date.now()}@gmail.com`);

  await page.getByRole('textbox', { name: 'Phone' })
    .fill('30012345678');

  // Confirmar
  await page.getByRole('button', { name: 'Reserve Now' }).click();

  // Validar
  await expect(
    page.getByText('Booking Confirmed')
  ).toBeVisible({ timeout: 15000 });

});