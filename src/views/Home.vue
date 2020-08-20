<template>
  <div class="home">
    <!-- Using a SVG -->
    <SvgElement
      class="logo"
      icon="LogoVue"
      name="Vue.js"/>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  margin: 0 auto;
}
</style>
