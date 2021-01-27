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
    ],
    routes: [],
    optimize: {
        bundle: true,
        minify: true,
        treeshake: true,
        target: "es2020",
    },
    packageOptions: {},
    devOptions: {},
    buildOptions: {},
};
