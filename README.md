

# Комментарий

Preview: https://master--zingy-daffodil-ad65ff.netlify.app/auth

Сходу можно заметить, что пагинация работает не как надо (есть только стрелки и нет возможности переключаться на конкретную страницу). 
Это связано с тем, что я не нашел возможности сделать подобный функционал для cursor-based пагинации.

У меня была лазейка, т.к. в тестовом сказано до 10 страниц, тогда можно было бы получить сразу 100 эл-то и показывать пользователю по 10 эл-то на странице 
и всю пагинацию сделать на фронте, но это бред и противоречит пункту про масштабируемость приложения. Поэтому я сделал так.

Поэтому в url не пишуться query для пагинации, пишуться для поиска, но проверить можно только, если развернуть проект у себя 
добавить в .env API_KEY (твой ключ для github API) и раскоментировать пару строк в api.ts (там написано какие).

Настройки для сборки вынесены в отдельные файлы.

В целом первый раз работаю с zustand и vite, есть проблемы с плагинами в проекте, но решать их времени нет. 

Похожи проекты на webpack + react:

https://github.com/Shallfeu/SocialNetwork

https://github.com/Shallfeu/CineSelect

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
