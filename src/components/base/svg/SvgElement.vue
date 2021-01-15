<template>
  <svg
    v-if="iconElement"
    xmlns="http://www.w3.org/2000/svg"
    :width="iconData.width"
    :height="iconData.height"
    :viewBox="iconData.viewBox"
    :aria-labelledby="`${iconData.title.replace(' ', '-')}-element`"
    role="presentation"
  >

    <title :id="`${iconData.title.replace(' ', '-')}-element`">{{ iconData.title }}</title>

    <g :fill="color">
      <component :is="iconElement" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'SvgBase',

  props: {
    type: {
      type: String,
      default: 'icon',
      validator: (value) => [
        'icon',
        'logo',
      ].indexOf(value) !== -1,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    width: {
      type: [Number, String],
      default: null,
    },
    height: {
      type: [Number, String],
      default: null,
    },
    viewBox: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      iconElement: null,
    };
  },

  computed: {
    iconData() {
      const name = `${this.type}-${this.name}`;

      switch (name) {
        case 'logo-LogoVue':
          return this.defaultData('261.76', '226.69', '0 0 261.76 226.69');
        default:
          return this.defaultData('20');
      }
    },
  },

  watch: {
    name() {
      this.loadIcon();
    },
  },

  mounted() {
    this.loadIcon();
  },

  methods: {
    defaultData(width, height = null, viewBox = null) {
      return {
        title: this.title ? this.title : this.name,
        width: this.width ? this.width : width,
        height: this.height ? this.height : (height || width),
        viewBox: this.viewBox ? this.viewBox : (viewBox || `0 0 ${width} ${(height || width)}`),
      };
    },

    loadIcon() {
      // eslint-disable-next-line prefer-template
      this.iconElement = () => import('@/components/base/svg/elements/' + this.type + '/' + this.name + '.vue');
    },
  },
};
</script>
