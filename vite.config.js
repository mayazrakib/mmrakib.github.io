import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(projectRoot, "index.html"),
                not_found: resolve(projectRoot, "404.html"),
            },
        },
    },
});
