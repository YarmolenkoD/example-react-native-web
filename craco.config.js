const path = require(`path`)

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@sharable': path.resolve(__dirname, 'src/sharable'),
      '@sharable/components': path.resolve(__dirname, 'src/sharable/components')
    }
  }
}
