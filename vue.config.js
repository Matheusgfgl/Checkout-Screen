module.exports = {
  // pwa: {
  //   themeColor: '#000000',
  //   name: 'App Name',
  //   msTileColor: '#000000',
  //   appleMobileWebAppCapable: 'true',
  //   workboxPluginMode: 'InjectManifest',
  //   manifestOptions: {
  //     name: 'App Name',
  //     short_name: 'App Name',
  //     start_url: '/',
  //     display: 'standalone',
  //     theme_color: '#000000',
  //     background_color: '#ffffff',
  //     description: 'App Description',
  //     orientation: 'portrait',
  //   },
  //   workboxOptions: {
  //     swSrc: 'public/service-worker.js',
  //   },
  // },
  configureWebpack: {
    plugins: [
      //
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 9000,
        maxSize: 140000,
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/base/_colors.scss";
        @import "@/assets/sass/base/_variables.scss";
        @import "@/assets/sass/base/_breakpoints.scss";
        `,
      },
    },
  },
};
