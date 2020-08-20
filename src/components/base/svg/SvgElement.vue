<template>
  <svg
    v-if="icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="iconData.width"
    :height="iconData.height"
    :viewBox="iconData.viewBox"
    :aria-labelledby="`${iconData.name.replace(' ', '-')}-icon`"
    role="presentation"
  >

    <title :id="`${iconData.name.replace(' ', '-')}-icon`">{{ iconData.name }}</title>

    <g :fill="color">
      <component :is="icon" />
    </g>
  </svg>
</template>

<script>
const LogoVue = () => import('@/components/base/svg/elements/LogoVue.vue');

export default {
  name: 'SvgBase',

  components: {
    LogoVue,
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      required: false,
      default: null,
    },
    width: {
      type: [Number, String],
      required: false,
      default: null,
    },
    height: {
      type: [Number, String],
      required: false,
      default: null,
    },
    viewBox: {
      type: String,
      required: false,
      default: null,
    },
  },

  computed: {
    iconData() {
      switch (this.icon) {
        case 'LogoVue':
          return this.defaultData('261.76', '226.69', '0 0 261.76 226.69');
        default:
          return this.defaultData('200');
      }
    },
  },

  methods: {
    defaultData(width, height = null, viewBox = null) {
      return {
        name: this.name ? this.name : this.icon,
        width: this.width ? this.width : width,
        height: this.height ? this.height : (height || width),
        viewBox: this.viewBox ? this.viewBox : (viewBox || `0 0 ${width} ${(height || width)}`),
      };
    },
  },
};
</script>
