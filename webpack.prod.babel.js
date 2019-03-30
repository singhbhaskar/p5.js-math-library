import merge from 'webpack-merge';
import common from './webpack.common.babel';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'p5.math.min.js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
})
