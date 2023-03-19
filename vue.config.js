module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-Movie-App/'
    : '/',
  outputDir: 'docs',
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Vue App';
      return args;
    });
  }
}
