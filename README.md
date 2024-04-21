# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Comments

- Иногда изображения из http://lorempixel.com кидают 429 (Too Many Request).
- В Header есть ссылки на страницы, которых нет в фигме.
- Также не нашел цвет выделения кнопок/ссылок (сделал стандартный синий).
- Т.к. в описании тестового задания есть роут на получение карточки по id,
принял решение подключить rue-router, вместо передачи обьекта пропсами.
- На всякий случай сделал страницу 404 и loader.
- Адаптив тоже не стал делать т.к. в макете нет.
