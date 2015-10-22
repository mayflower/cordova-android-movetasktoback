/* global require, module */

var exec = require('cordova/exec'),
    argscheck = require('cordova/argscheck'),
    tsd = require('cordova-plugin-android-movetasktoback.tsd'),
    cordova = require('cordova');

var SERVICE_NAME = 'MoveTaskToBack';

function executeForDeferred(method, args) {
    var deferred = tsd.create();

    exec(
        function(result) {
            deferred.resolve(result);
        },
        function(reason) {
            deferred.reject(reason);
        },
        SERVICE_NAME, method, args
    );

    return deferred.promise;
}

function moveTaskToBack() {
    argscheck.checkArgs('', SERVICE_NAME + ' moveTaskToBack', arguments);

    if (cordova.platformId.toLowerCase() != 'android') {
        return tsd.create()
            .reject('not supported on platform ' + cordova.platformId)
            .promise;
    }

    return executeForDeferred('moveTaskToBack', []);
}


module.exports = {
    moveTaskToBack: moveTaskToBack
};
