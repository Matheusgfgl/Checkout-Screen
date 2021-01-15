<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
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

/**
  *
  * Project
  *
  */
@import "@/assets/sass/project/_buttons.scss";
@import "@/assets/sass/project/_form.scss";

#app {
  font-family: $font-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $gray-500;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $gray-500;

    &.router-link-exact-active {
      color: $green-500;
    }
  }
}
</style>
