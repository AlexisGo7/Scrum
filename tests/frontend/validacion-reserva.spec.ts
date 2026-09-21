import { test, expect } from '@playwright/test';

test('CP-003 - Validar campos obligatorios de reserva', async ({ page }) => {

  // 1. Ingresar al sistema
  await page.goto('https://automationintesting.online/');

  // 2. Ir a Rooms
  await page.locator('#navbarNav')
    .getByRole('link', { name: 'Rooms' })
    .click();

  // 3. Seleccionar habitación
  await page.getByRole('link', { name: 'Book now' }).nth(2).click();

  // 4. Esperar a que cargue el calendario
  await page.waitForTimeout(3000);

  // 5. Seleccionar fecha de entrada
  await page.locator(
    'div:nth-child(3) > .rbc-row-bg > div:nth-child(4)'
  ).click();

  // 6. Seleccionar fecha de salida
  await page.getByRole('button', { name: '26' }).click();
  await page.getByRole('cell', { name: '27' }).click();

  // 7. Continuar con la reserva
  await page.getByRole('button', { name: 'Reserve Now' }).click();

  // 8. Intentar continuar sin completar los datos
  await page.getByRole('button', { name: 'Reserve Now' }).click();

  // 9. Verificar que seguimos en el formulario de reserva
  await expect(
    page.getByRole('textbox', { name: 'Firstname' })
  ).toBeVisible();

});