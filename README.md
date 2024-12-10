# ToDo List

This project is a simple and efficient web application for managing your tasks. With features such as creation, editing, searching, filtering and marking status (completed or pending), ToDo List offers an intuitive and practical experience to keep your activities organized. Ideal for optimizing your productivity and making it easier to keep track of your daily tasks.

## Live demo

Access the [Live Demo](https://igor-live-demo-todo-list.vercel.app/) or copy the URL directly: `https://igor-live-demo-todo-list.vercel.app/`

## Project resources

**Core resources:**

- HTML
- TypeScript
- React.js
- Vite.js
- Tailwindcss
- Redux

**Development support:**

- Git
- PNPM
- Lighthouse
- Biome.js
- Live demo on Vercel

**Code quality and best practices:**

- Conventional commits
- Documentation
- Tests
- Standardized code formatting
- Absolute imports
- SEO
- Task data saved to LocalStorage
- State management

![Image](./public/lighthouse.png)

## How to use

1. Clone this repository to your computer.
2. This project uses the `PNPM` package manager. To install dependencies, run the `pnpm install` command. If you prefer to use a different package manager, delete the `node_modules` and `pnpm-lock.yaml` files in the project root and use the appropriate commands to configure it.

**Running app:**

1. This project uses `Vite.js` as its bundler. To view the project running, open your web browser and navigate to the URL `http://localhost:3000`. If you prefer to use a different server port, open the `vite.config.ts` file in the project root, find the `server` section, and change the `port` value as desired.

**Running tests:**

1. To test with `Lighthouse`, first run the `pnpm build` command. Then, start the preview server with the `pnpm preview` command and access the URL `http://localhost:4000` in an incognito browser window. If you prefer to use a different preview port, open the `vite.config.ts` file in the root of your project, find the `preview` section, and change the `port` value as desired.
2. To run the test, press `F12` or right-click and select `Inspect`. Go to the `Lighthouse` tab and click `Generate Report` to generate the report.