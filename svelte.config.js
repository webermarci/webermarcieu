const preprocess = require('svelte-preprocess')

module.exports = {
    preprocess: preprocess({
        defaults: {
            script: "typescript",
            style: "postcss",
        },
        postcss: {
            plugins: [
                require("@tailwindcss/jit"),
                require("autoprefixer")
            ],
        }
    })
}
