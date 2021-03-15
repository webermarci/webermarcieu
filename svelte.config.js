const preprocess = require('svelte-preprocess')

module.exports = {
    preprocess: preprocess({
        postcss: {
            plugins: [
                require("@tailwindcss/jit"),
                require("autoprefixer")
            ],
        }
    })
}
