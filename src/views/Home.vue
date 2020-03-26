<template>
  <div class="home">
    <!-- Using a SVG -->
    <icon
      class="logo"
      icon="logo"
      name="Vue.js"
      width="261.76"
      height="226.69"/>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

import icon from '@/components/base/svg/SVG.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    icon,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  margin: 0 auto;
}
</style>
