module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'spec/**/*_spec.js'
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      'spec/**/*.js': ['babel']
    },

    plugins: [
      'karma-babel-preprocessor',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js')
      },
      sourceFileName: function (file) {
        return file.originalPath
      }
    }
  })
}
