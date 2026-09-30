# react-qrcode

Приложение для генерации и сканирования QR-кодов на Next.js + React + TypeScript с поддержкой `localStorage`.

### Demo - https://eugene-stone.github.io/react-qrcode

## Что реализовано

- Генерация QR-кодов из текста или URL
- Сканирование QR-кодов через камеру устройства
- История генерации QR-кодов
- История сканирования QR-кодов
- Сохранение данных в localStorage
- Навигация между страницами через Next.js App Router
- `basePath: "/react-qrcode"` для сохранения привычного адреса проекта

## Стек

- React 19
- TypeScript 6
- Next.js 16
- `qrcode.react` — для генерации QR-кодов
- `@yudiel/react-qr-scanner` — для сканирования QR-кодов
- Sass
- ESLint

## Команды

```bash
npm run dev
npm run build
npm run lint
```

В dev-режиме приложение открывается по адресу:

```text
http://localhost:3000/react-qrcode
```

## Особенности

- Данные сохраняются в localStorage браузера
- Сканер использует заднюю камеру устройства
- Ссылки в истории кликабельны
- Используется CSS Modules для стилизации компонентов
- Клиентские компоненты отмечены через `'use client'`, потому что используют состояние, камеру и `localStorage`
