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

**Development support:**

- Git
- PNPM Package Manager
- Lighthouse
- Live demo on Vercel
- Biome.js

**Code quality and best practices:**

- Conventional commits
- Documentation
- Tests
- Standardized code formatting
- Absolute imports

![Image](./public/lighthouse.png)

## How to use

1. Clone this repository to your computer.
2. This project uses the `PNPM` package manager. To install dependencies, run the `pnpm install` command. If you prefer to use a different package manager, delete the `node_modules` and `pnpm-lock.yaml` files in the project root and use the appropriate commands to configure it.

**Running app:**

1. To start the development server, use the `pnpm dev` command.
2. This project uses `Vite.js` as the bundler. To view the project running, open your browser and navigate to `http://localhost:3000`. If you prefer to use a different server port, open the `vite.config.ts` file at the root of the project, locate the `server` section, and modify the `port` value as needed.

**Running tests:**

1. Before running tests, build the project using the pnpm build command to create a production-optimized version.
2. After building, preview your project with the pnpm preview command to start the preview server. The preview server will start on port 5000 by default. If you prefer to use a different preview port, open the vite.config.ts file in the root of your project, locate the preview section, and modify the port value as needed.
3. Test coverage was done using `Lighthouse`. To run it, open an incognito window in your browser, navigate to the foot-view project URL, press `F12` or right-click and select `Inspect`, go to the `Lighthouse` tab and click `Generate Report` to run the test.