module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        'ignorePseudoElements': ['v-deep']
      }
    ]
  },
  ignoreFiles: ['src/assets/sass/base/_normalize.scss']
};