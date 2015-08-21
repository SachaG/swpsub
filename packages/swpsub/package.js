Package.describe({
  name: "swpsub",
  summary: "SweepSubmit package",
  version: "0.1.0"
  // git: "https://github.com/TelescopeJS/telescope-releases.git"
});

Npm.depends({
  'tabdown': '0.0.3'
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  api.use(['telescope:core@0.22.2']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.addFiles([
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/stylesheets/_categories.scss',
    'lib/client/stylesheets/screen.scss',
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/import_categories.js'
  ], ['server']);

  api.addFiles('categories/categories.txt', 'server', { isAsset: true });
  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});