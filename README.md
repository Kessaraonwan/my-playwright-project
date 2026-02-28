# my-playwright-project

แบบฝึกหัดวิชา Software Testing ใช้ Playwright ทดสอบเว็บ saucedemo.com

## Test ที่เขียน

- **login.spec.js** — ทดสอบการ login และเช็คหน้า inventory
- **cart.spec.js** — ทดสอบการเพิ่มและลบสินค้าในตะกร้า
- **assertions.spec.js** — ทดสอบ error message เมื่อ login ด้วย password ผิด
- **sort.spec.js** — ทดสอบการเรียงสินค้าจากราคาต่ำไปสูง

## ผลการทดสอบ

ผ่านทั้งหมดบน Chromium และ WebKit