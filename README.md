# Valentine's Day Interactive Card 💖

## Overview
Decode love with this Valentine's project! 🖥️ This React application is a delightful Valentine's Day experiment featuring a charming bear and a heartwarming invitation to be your Valentine.

## Description
The application showcases a playful and interactive interface that poses a sweet question: "Will you be my Valentine?" Users are presented with two response options - a heartwarming **Yes** button and a tricky **No** button.

### Smart "No" Button
The cleverly designed **No** button adds a touch of humor and creativity to the user experience. Each time the user attempts to press **No**, the button responds with a witty change, offering responses like "**Are you sure**," "**You're breaking my heart**," and more. This playful interaction encourages users to eventually click **Yes**.

### Celebration
Upon agreeing to be your Valentine, the webpage celebrates the acceptance with a cute GIF, spreading love and joy.


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
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
