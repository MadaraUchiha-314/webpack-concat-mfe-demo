const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'remote-b-chunk-[name].js',
    chunkFilename: 'remote-b-chunk-[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
    },
  },
};
