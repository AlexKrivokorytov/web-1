import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const root = process.cwd();

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(root, 'src/partials'),
            context: {
                siteName: 'Student Website',
            },
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                about: resolve(root, 'about.html'),
                contacts: resolve(root, 'contacts.html'),
            },
        },
    },
});
