const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  typescript: {
      /**
     * `yarn lint:types` ran in CI already so we can safely assume no errors
     *  here, conveniently reducing build time by ~55%
     * @see https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
     */
    ignoreBuildErrors: true
  }
})
