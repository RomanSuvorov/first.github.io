
requirejs.config({
    paths: {
        'jquery': "https://code.jquery.com/jquery-2.2.4.min",
        'tmpl': 'tmpl'
    },
    shim: {
        'jquery': {
            exports: "$"
        },
        'tmpl': {
            exports: "tmpl"
        }
    }
});



require(['jquery', 'model', 'view', 'controller'], function ($, Model, View, Controller) {
    'use strict';
            var initData = ['First item','Second item','Third item'];
            var model = new Model(initData);
            var view = new View(model);
            var controller = new Controller(model, view);
    });




