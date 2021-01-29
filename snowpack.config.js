/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-postcss',
    ],
    routes: [],
    optimize: {
        bundle: true,
        minify: true,
        treeshake: true,
    },
    packageOptions: {},
    devOptions: {},
    buildOptions: {},
};
