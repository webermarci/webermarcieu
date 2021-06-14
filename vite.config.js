const { defineConfig } = require('vite');
const { svelte } = require('@sveltejs/vite-plugin-svelte');

module.exports = defineConfig(({ mode }) => {
    return {
        plugins: [svelte()],
        build: {
            minify: mode === 'production'
        }
    }
})
