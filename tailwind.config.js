module.exports = {
    mode: "jit",
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './src/**/*.svelte',
        ]
    },
    theme: {
        extend: {}
    },
    plugins: []
};
