module.exports = {
  syntax: 'postcss-scss',
  map: {
    sourcesContent: true,
    annotation: true,
  },
  plugins: {
    'postcss-node-sass': {
      includePaths: ['node_modules'],
      outputStyle: 'expanded',
      indentWidth: 2,
      precision: 6,
    },
    autoprefixer: {},
  },
}
