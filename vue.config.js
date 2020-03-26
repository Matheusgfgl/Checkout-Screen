/* eslint-disable import/no-extraneous-dependencies */
// Webpack
const webpack = require('webpack');

// Purge CSS
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

// Git Version
const GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();

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
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/App.vue'),
          path.join(__dirname, './src/components/**/*.vue'),
          path.join(__dirname, './src/views/**/*.vue'),
        ]),
        whitelistPatternsChildren: [
          //
        ],
      }),
      GitRevisionPlugin,
      new webpack.DefinePlugin({
        APP_VERSION: JSON.stringify(gitRevisionPlugin.version()),
      }),
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
        prependData: `@import "@/assets/sass/base/_colors.scss";
        @import "@/assets/sass/base/_variables.scss";
        @import "@/assets/sass/base/_breakpoints.scss";
        `,
      },
    },
  },
};
