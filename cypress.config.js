const { defineConfig } = require( "cypress" );
const webpackConfig = require( "./config/webpack.config" );

module.exports = defineConfig( {
  projectId: "hyqzum",

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    specPattern: [ 'src/**/*.cy.{js,jsx}' ],
    setupNodeEvents ( on, config ) {
      require( '@cypress/code-coverage/task' )( on, config );

      //      on( 'file:preprocessor', require( '@cypress/code-coverage/use-babelrc' ) );

      return config;
    },
  },

  e2e: {
    setupNodeEvents ( on, config ) {
      require( '@cypress/code-coverage/task' )( on, config )
      return config
    },
  },

  env: {
    codeCoverageTasksRegistered: true,
  },
} );
