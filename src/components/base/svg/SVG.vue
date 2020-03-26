<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    v-if="SVGElement"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="`${name.replace(' ', '-')}-icon`"
    role="presentation">

    <title :id="`${name.replace(' ', '-')}-icon`">{{ name }}</title>

    <g :fill="color">
      <component :is="SVGElement"></component>
    </g>
  </svg>
</template>

<script>
// Import SVGs here
import LogoVue from '@/components/base/svg/elements/Logo.vue';

export default {
  name: 'SvgBase',

  components: {
    // Load them here
    LogoVue,
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: null,
    },
    width: {
      type: [Number, String],
      required: true,
    },
    height: {
      type: [Number, String],
      required: true,
    },
    viewBox: {
      type: String,
      required: false,
      default: null,
    },
  },

  computed: {
    SVGElement() {
      let data;

      switch (this.icon) {
        // Allow use of them here
        case 'logo':
          data = 'LogoVue';
          break;

        default:
          data = null;
          break;
      }


      return data;
    },
  },
};
</script>
