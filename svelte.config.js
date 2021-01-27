const autoPreprocess = require('svelte-preprocess');
const cssnano = require('cssnano');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    preprocess: autoPreprocess({
        defaults: {
            script: 'typescript',
        },
        postcss: {
            plugins: [
                require("tailwindcss"),
                ...prod ? [
                    require("autoprefixer"),
                    cssnano({ preset: 'default' })
                ] : []
            ],
        },
    }),
};