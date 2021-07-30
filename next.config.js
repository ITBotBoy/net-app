const withLess = require("next-with-less");
// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
    reactStrictMode: true,
    lessLoaderOptions: {
        lessOptions: {
            modifyVars: {}
        }
    }
});
