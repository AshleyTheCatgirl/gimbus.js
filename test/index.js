var chai = require('chai');
var gimbus = require('../index');

describe('#shorten', function () {
    it('shortens http://ashley.re to https://gimb.us/VHCL1', function (done) {
        function callback(result) {
            chai.expect(result).to.be.equal('https://gimb.us/VHCL1');
            done();
        }

        gimbus.shorten('http://ashley.re', callback);
    });
});

describe('#unshorten', function () {
    it('unshortens https://gimb.us/VHCL1 to http://ashley.re', function (done) {
        function callback(result) {
            chai.expect(result).to.be.equal('http://ashley.re');
            done();
        }

        gimbus.unshorten('https://gimb.us/VHCL1', callback);
    });
});
