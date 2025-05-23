const path = require('path')
const { text } = require('stream/consumers')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test: /\.css$/i,
        use:['style-loader','css-loader']
      }
    ]
  }
}