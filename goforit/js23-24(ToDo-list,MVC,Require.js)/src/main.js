/**
 * Created by Roman on 27.02.2017.
 */


requirejs.config({
    paths:{
        'jQuery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
    },
    shim: {
        'jQuery' : {
            export: 'jQuery'
        }
    }
});

require(["util", "jQuery"], function (util, $) {
    console.log("util");
    console.log("$");
});