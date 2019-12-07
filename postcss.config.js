module.exports = {
    plugins: {
        'postcss-pxtorem': {},
        'postcss-color-rgba-fallback': {},
        'css-mqpacker': { sort: true },
        cssnano: {
            zindex: false // Rebases z-index values http://cssnano.co/optimisations/zindex/ which breaks the Modals
        }
    }
};
