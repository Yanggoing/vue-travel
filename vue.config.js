module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: '80',
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
