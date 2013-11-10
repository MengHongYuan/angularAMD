/*jslint browser: true, devel: true, node: true, vars: true, nomen: true */
/*globals define, angular */

define(['angularAMD'], function (angularAMD) {
    'use strict';

    /**
     * BOOTSTRAP ANGULAR
     * Replicating what would normally take place in app.js
     */
    var app_name = "unitest-app",
        app = angular.module(app_name, []);
    
    // Add property for unit test
    app.__appname = app_name;
    app.__origAngular = window.angular;
    
    /*
    var elem = document.createElement('div');
    angularAMD.bootstrap(app, undefined, elem);
    */
    angularAMD.bootstrap(app);

    return app;
});
