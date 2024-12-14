# ToDo List

This project is a simple web application for managing your tasks. With features such as creating, deleting, filtering, and a pagination system to organize tasks, the ToDo List provides an intuitive and practical experience to keep your activities organized. Perfect for optimizing productivity and making it easier to track your daily tasks.

## Live demo

Access the [Live Demo](https://igor-live-demo-todo-list.vercel.app/) or copy the URL directly: `https://igor-live-demo-todo-list.vercel.app/`

## Project resources

**Core resources:**

- HTML
- CSS
- Tailwindcss
- JavaScript
- TypeScript
- React.js
- Vite.js
- LocalStorage
- Redux

**Development support:**

- Git
- PNPM Package Manager
- Biome.js
- Lighthouse
- Live demo on Vercel

**Code quality and best practices:**

- Conventional commits
- Documentation
- Tests
- Standardized code formatting
- Absolute imports
- Task List data saved in LocalStorage
- State management

![Image](./public/lighthouse.png)

## How to use

1. Clone this repository to your computer.
2. This project uses the `PNPM` package manager. To install dependencies, run the `pnpm install` command. If you prefer to use a different package manager, delete the `node_modules` and `pnpm-lock.yaml` files in the project root and use the appropriate commands to configure it.

**Running app:**

1. This project uses `Vite.js` as its bundler. To view the project, run the `pnpm dev` command and then open your web browser and navigate to the URL `http://localhost:3000`. If you prefer to use a different server port, open the `vite.config.ts` file in the root of the project, find the `server` section, and change the `port` value as desired.

**Running Tests:**

1. To test with `Lighthouse`, first run the `pnpm build` command. Then, start the preview server with the `pnpm preview` command and access the URL `http://localhost:4000` in an incognito browser window. If you prefer to use a different preview port, open the `vite.config.ts` file in the root of your project, find the `preview` section, and change the `port` value as desired.
2. To run the test with `Lighthouse`, press `F12` on the page or right-click and select `Inspect`. Go to the `Lighthouse` tab and click `Generate Report` to generate the report.