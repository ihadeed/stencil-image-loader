exports.config = {
  bundles: [
    { components: ['img-loader', 'image-loader'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
