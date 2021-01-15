<template>
  <div class="home">
    <!-- Using a SVG -->
    <SvgElement
      type="logo"
      name="LogoVue"
      title="Vue.js"
    />

    <HelloWorld msg="Welcome to Your Vue.js App" />
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
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  margin: 0 auto;
}
</style>
