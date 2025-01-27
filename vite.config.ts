import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 3000
    },
    preview: {
        port: 4000
    },
    resolve: {
        alias: {
            "~components": resolve(__dirname, "./src/components"),
            "~hooks": resolve(__dirname, "./src/hooks"),
            "~store": resolve(__dirname, "./src/store"),
            "~styles": resolve(__dirname, "./src/styles"),
            "~types": resolve(__dirname, "./src/types"),
            "~utils": resolve(__dirname, "./src/utils")
        }
    }
});
