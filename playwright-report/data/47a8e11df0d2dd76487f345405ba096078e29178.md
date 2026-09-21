# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frontend\reserva-exitosa.spec.ts >> CP-002 - Realizar reserva correctamente
- Location: tests\frontend\reserva-exitosa.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Booking Confirmed')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Booking Confirmed') with timeout 15000ms
  - waiting for getByText('Booking Confirmed')
    - waiting for "https://automationintesting.online/reservation/2?" navigation to finish...
    - navigated to "https://automationintesting.online/reservation/2?"

```

```yaml
- navigation:
  - link "Shady Meadows B&B":
    - /url: /
  - list:
    - listitem:
      - link "Rooms":
        - /url: /#rooms
    - listitem:
      - link "Booking":
        - /url: /#booking
    - listitem:
      - link "Amenities":
        - /url: /#amenities
    - listitem:
      - link "Location":
        - /url: /#location
    - listitem:
      - link "Contact":
        - /url: /#contact
    - listitem:
      - link "Admin":
        - /url: /admin
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - text: /
      - link "Rooms":
        - /url: "#"
    - listitem: / Double Room
- heading "Double Room" [level=1]
- text: Accessible  Max 2 Guests
- img "Room Image"
- heading "Room Description" [level=2]
- paragraph: Vestibulum sollicitudin, lectus ac mollis consequat, lorem orci ultrices tellus, eleifend euismod tortor dui egestas erat. Phasellus et ipsum nisl.
- heading "Room Features" [level=2]
- text:  TV  Radio  Safe
- heading "Room Policies" [level=2]
- heading "Check-in & Check-out" [level=3]
- list:
  - listitem:
    - text: 
    - strong: "Check-in:"
    - text: 3:00 PM - 8:00 PM
  - listitem:
    - text: 
    - strong: "Check-out:"
    - text: By 11:00 AM
  - listitem:
    - text: 
    - strong: "Early/Late:"
    - text: By arrangement
- heading "House Rules" [level=3]
- list:
  - listitem:  No smoking
  - listitem:  No parties or events
  - listitem:  Pets allowed (restrictions apply)
- status
- heading "Similar Rooms You Might Like" [level=2]
- img "Single"
- heading "Single" [level=3]
- text:  2 Guests £100/night
- paragraph: Aenean porttitor mauris sit amet lacinia molestie. In posuere accumsan aliquet. Maecenas sit amet nisl massa. Interdum et malesuada fames ac ante.
- link "View Details":
  - /url: /reservation/1?checkin=null&checkout=null
- img "Suite"
- heading "Suite" [level=3]
- text:  2 Guests £225/night
- paragraph: Etiam metus metus, fringilla ac sagittis id, consequat vel neque. Nunc commodo quis nisl nec posuere. Etiam at accumsan ex.
- link "View Details":
  - /url: /reservation/3?checkin=null&checkout=null
- contentinfo:
  - heading "Shady Meadows B&B" [level=5]
  - paragraph: Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - heading "Contact Us" [level=5]
  - list:
    - listitem:  Shady Meadows B&B, Shadows valley, Newingtonfordburyshire, Dilbery, N1 1AA
    - listitem:  012345678901
    - listitem:  fake@fakeemail.com
  - heading "Quick Links" [level=5]
  - list:
    - listitem:
      - link "Home":
        - /url: "#"
    - listitem:
      - link "Rooms":
        - /url: "#"
    - listitem:
      - link "Booking":
        - /url: "#"
    - listitem:
      - link "Contact":
        - /url: "#"
  - separator
  - text: restful-booker-platform v2.2 Created by
  - link "Mark Winteringham":
    - /url: http://www.mwtestconsultancy.co.uk
  - text: "- © 2019-26"
  - link "Cookie-Policy":
    - /url: /cookie
  - text: "-"
  - link "Privacy-Policy":
    - /url: /privacy
  - text: "-"
  - link "Admin panel":
    - /url: /admin
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('CP-002 - Realizar reserva correctamente', async ({ page }) => {
  4  | 
  5  |   await page.goto('https://automationintesting.online/');
  6  | 
  7  |   await page.locator('#navbarNav')
  8  |     .getByRole('link', { name: 'Rooms' })
  9  |     .click();
  10 | 
  11 |   await page.getByRole('link', { name: 'Book now' }).nth(2).click();
  12 | 
  13 |   await page.waitForTimeout(3000);
  14 | 
  15 |   // Seleccionar fechas
  16 |   await page.locator(
  17 |     'div:nth-child(3) > .rbc-row-bg > div:nth-child(4)'
  18 |   ).click();
  19 | 
  20 | await page.getByRole('button', { name: '16' }).click();
  21 | await page.getByRole('cell', { name: '25' }).click();
  22 | 
  23 |   // Continuar
  24 |   await page.getByRole('button', { name: 'Reserve Now' }).click();
  25 | 
  26 |   // Datos
  27 |   await page.getByRole('textbox', { name: 'Firstname' })
  28 |     .fill('Alexis');
  29 | 
  30 |   await page.getByRole('textbox', { name: 'Lastname' })
  31 |     .fill('Castaño');
  32 | 
  33 |   await page.getByRole('textbox', { name: 'Email' })
  34 |     .fill(`alexis.${Date.now()}@gmail.com`);
  35 | 
  36 |   await page.getByRole('textbox', { name: 'Phone' })
  37 |     .fill('30012345678');
  38 | 
  39 |   // Confirmar
  40 |   await page.getByRole('button', { name: 'Reserve Now' }).click();
  41 | 
  42 |   // Validar
  43 |   await expect(
  44 |     page.getByText('Booking Confirmed')
> 45 |   ).toBeVisible({ timeout: 15000 });
     |     ^ Error: expect(locator).toBeVisible() failed
  46 | 
  47 | });
```