/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        require("postcss-custom-media"),
        require("postcss-nested"),
        require("autoprefixer"),
    ],
};

module.exports = config;
