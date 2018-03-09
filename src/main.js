import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-fetch-client')
    .plugin('signalr-client');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing').plugin('aurelia-fetch-client').plugin('signalr-client');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
