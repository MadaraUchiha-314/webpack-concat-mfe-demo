const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'remote-a-chunk-[name].js',
    chunkFilename: 'remote-a-chunk-[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
    },
  },
};
