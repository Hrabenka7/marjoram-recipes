const path = require('path')

module.exports = {
  entry: './src/js/index.js', // starts look for dependencies here
  output: {  // location of the saved bundle file
    path: path.resolve(__dirname,'dist/js'),
    filename: 'bundle.js'
  },
  mode: 'development' // not compressing code
};