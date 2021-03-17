const { defineConfig } = require('vite');
const svelte = require('@svitejs/vite-plugin-svelte');

module.exports = defineConfig(({ mode }) => {
    return {
        plugins: [svelte()],
        build: {
            minify: mode === 'production'
        }
    }
})
