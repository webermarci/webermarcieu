const prod = process.env.NODE_ENV === 'production';

module.exports = {
    purge: {
        enabled: prod,
        content: [
            './src/**/*.svelte',
        ]
    },
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
};
