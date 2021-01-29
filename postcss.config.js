const cssnano = require('cssnano');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        require("tailwindcss"),
        ...prod ? [
            require("autoprefixer"),
            cssnano({ preset: 'default' })
        ] : []
    ],
};