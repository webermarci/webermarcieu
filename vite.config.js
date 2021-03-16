const svelte = require('@svitejs/vite-plugin-svelte')
const { defineConfig } = require('vite')

module.exports = defineConfig(({ command, mode }) => {
    return {
        plugins: [svelte()],
        build: {
            minify: mode === 'production'
        }
    }
})
