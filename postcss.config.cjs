module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'xs': 'min-width: 36em',
        'sm': 'min-width: 48em',
        'md': 'min-width: 62em',
        'lg': 'min-width: 75em',
        'xl': 'min-width: 88em',
      },
    },
  },
};