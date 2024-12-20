# ToDo List

This project is a simple web application for managing your tasks. With features such as creating, deleting, filtering, and a pagination system to organize tasks, the ToDo List provides an intuitive and practical experience to keep your activities organized. Perfect for optimizing productivity and making it easier to track your daily tasks.

## Live demo

Access the [Live Demo](https://igor-live-demo-todo-list.vercel.app/) or copy the URL directly: `https://igor-live-demo-todo-list.vercel.app/`

## Project resources

**Core resources:**

- HTML
- TypeScript
- React.js
- Vite.js

**Development support:**

- Git
- PNPM Package Manager
- Code formatting with Biome.js
- Live demo on Vercel
- Test coverage with Lighthouse

**Code quality and best practices:**

- Conventional commits
- Documentation
- Tests
- Standardized code formatting
- Absolute imports

![Image](./public/lighthouse.png)

## How to use

1. Clone this repository to your computer.
2. This project uses the `PNPM` package manager. To install the dependencies, run the command `pnpm install`. If you prefer to use another package manager, delete the `node_modules` and the `pnpm-lock.yaml` file, then use the appropriate commands to configure the new package manager.

### Running app

1. This project uses `Vite.js` as its bundler. To view the project, run the `pnpm dev` command and then navigate to the URL `http://localhost:3000` in your browser. If you prefer to use a different server port, open the `vite.config.ts` file, find the `server` section, and change the `port` value as desired.

### Running Tests:

**Lighthouse**

1. First, run the `build command`. Then, once the build is complete, start the preview server with the `pnpm preview` command and access the URL `http://localhost:4000` in an incognito window of your browser. If you prefer to use a different port, open the `vite.config.ts` file and find the `preview` section and change the `port` value as desired.
2. To run the tests, press `F12` on the page or right-click and select `inspect`. Then, go to the `Lighthouse` tab and click `Generate Report` to generate the report.