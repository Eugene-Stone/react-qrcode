# react-qrcode

Приложение для генерации и сканирования QR-кодов на React + Vite + TypeScript с поддержкой React Router и localStorage.

### Demo - https://eugene-stone.github.io/react-qrcode/

## Что реализовано

- Генерация QR-кодов из текста или URL
- Сканирование QR-кодов через камеру устройства
- История генерации QR-кодов
- История сканирования QR-кодов
- Сохранение данных в localStorage
- Навигация между страницами с React Router
- Отдельный `base: "/react-qrcode"` для корректной работы на GitHub Pages

## Стек

- React 19
- TypeScript 6
- Vite
- React Router DOM 7
- `qrcode.react` — для генерации QR-кодов
- `@yudiel/react-qr-scanner` — для сканирования QR-кодов
- Sass
- ESLint

## Особенности

- Данные сохраняются в localStorage браузера
- Сканер использует заднюю камеру устройства
- Ссылки в истории кликабельны
- Используется CSS Modules для стилизации компонентов
- `RouterProvider` и `Outlet` для вложенной маршрутизации

