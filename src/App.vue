<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
/**
  *
  * Normalize from Tailwind
  * https://unpkg.com/tailwindcss@1.1.4/dist/base.css
  *
  */
@import "@/assets/sass/base/_normalize.scss";

/**
  *
  * Base
  *
  */
@import "@/assets/sass/base/_container.scss";
@import "@/assets/sass/base/_fonts.scss";
@import "@/assets/sass/base/_variables.scss";
@import "@/assets/sass/base/_colors.scss";

/**
  *
  * Project
  *
  */
@import "@/assets/sass/project/_buttons.scss";
@import "@/assets/sass/project/_form.scss";

html {
  width: 100%;
  scroll-behavior: smooth;

  body {
    font-family: 'Souce Sans Pro', sans-serif;
    width: 100%;
  }
}
</style>
