var Shipping = function () {
    this.company = "";
};

Shipping.prototype = {
    setStrategy: function (company) {
        this.company = company;
    },

    calculate: function (package) {
        return this.company.calculate(package);
    }
};

var UPS = function () {
    this.calculate = function (package) {
        //calculations here
        return "$45.95"
    }
};

var USPS = function () {
    this.calculate = function (package) {
        //calculations here
        return "$39.40"
    }
};

var Fedex = function () {
    this.calculate = function (package) {
        //calculations here
        return "$43.20"
    }
};

function run() {

    var package = { from: "76712", to: "10012", weight: "1kg"};

    var ups = new UPS();
    var usps = new USPS();
    var fedex = new Fedex();

    var shipping = new Shipping();

    shipping.setStrategy(ups);
    console.log("UPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(usps);
    console.log("USPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(fedex);
    console.log("Fedex Strategy: " + shipping.calculate(package));
}