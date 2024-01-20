'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  /*

# jQuery

..\node_modules\jquery\
..\node_modules\jquery\dist\
..\node_modules\jquery\dist\jquery.min.js

# Font-awesome v4.7.0

..\node_modules\font-awesome\
..\node_modules\font-awesome\css\
..\node_modules\font-awesome\fonts\

# Bootstrap v3.4.1

..\node_modules\bootstrap\
..\node_modules\bootstrap\dist\
..\node_modules\bootstrap\dist\css\
..\node_modules\bootstrap\dist\fonts\
..\node_modules\bootstrap\dist\js\

# Moment
..\node_modules\moment\min\moment.min.js

# Moment Timezone
..\node_modules\moment-timezone\builds\moment-timezone.min.js

# Bootstrap DateTimePicker
..\node_modules\eonasdan-bootstrap-datetimepicker\build\css\bootstrap-datetimepicker.min.css
..\node_modules\eonasdan-bootstrap-datetimepicker\build\js\bootstrap-datetimepicker.min.js

   */

  // # Font-awesome v4.7.0 (CSS)
  app.import('node_modules/font-awesome/css/font-awesome.min.css');
  app.import('node_modules/font-awesome/fonts/fontawesome-webfont.ttf', {destDir: 'fonts'});
  app.import('node_modules/font-awesome/fonts/fontawesome-webfont.woff', {destDir: 'fonts'});
  app.import('node_modules/font-awesome/fonts/fontawesome-webfont.woff2', {destDir: 'fonts'});

  // # Bootstrap v3.4.1 (CSS)
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {destDir: 'fonts'});
  app.import('node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {destDir: 'fonts'});
  app.import('node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {destDir: 'fonts'});

  // # Bootstrap DateTimePicker v4.17.47 (CSS)
  app.import('node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');

  // # Bootstrap v3.4.1 (JS)
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');

  // # Moment v2.29.4 (JS)
  app.import('node_modules/moment/min/moment.min.js');

  // # Moment Timezone v0.4.1 (JS)
  app.import('node_modules/moment-timezone/builds/moment-timezone.min.js');

  // # Bootstrap DateTimePicker v4.17.47 (JS)
  app.import('node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js');

  // Template
  // -----------------------------------------------------------------------------------------------------------
  // Use CSS in Ember
  // app.import('node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');
  //
  // Use Fonts in Ember
  // app.import('node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff', {destDir: 'fonts'});
  //
  // Use JS in Ember
  // app.import('node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js');
  // -----------------------------------------------------------------------------------------------------------

  return app.toTree();
};
