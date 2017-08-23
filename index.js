'use strict';

var request = require('request');

function shorten(url, callback) {
    var callback = typeof callback !== 'undefined' ? callback : console.log;
    request(
        {
            uri: 'https://gimb.us/',
            method: 'GET',
            qs: {
                url: url
            }
        },

        function (error, response, body) {
            callback('https://gimb.us/' + body)
        }
    );
}

function unshorten(url, callback) {
    var callback = typeof callback !== 'undefined' ? callback : console.log;
    request(
        {
            uri: url,
            method: 'HEAD',
            followRedirect: false
        },

        function (error, response, body) {
            var loc = response.headers['location'];
            if (typeof loc === 'undefined') loc = url;
            callback(loc)
        }
    );
}

module.exports.shorten = shorten;
module.exports.unshorten = unshorten;
