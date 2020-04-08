'use strict'

module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [['@babel/transform-react-jsx', { pragma: 'createElement' }]],
}
