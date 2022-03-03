// old interface

function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        //...
        let cost = "$49.75"
        return cost;
    }
}

//new interface

function AdvancedShipping() {
    this.login = function (credentials) {/*...*/};
    this.setStart = function (start) {/*...*/};
    this.setDestination = function (destination) {/*...*/};
    this.calculate = function (weight) {return "$39.50";};
}

// adapter interface

function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}

function run() {

    var shipping = new Shipping();
    var credentials = { token: "22a7-6ccl"};
    var adapter = new ShippingAdapter(credentials);

    //original shipping object and interface

    var cost = shipping.request("78702", "19871", "2 lbs");

    console.log("New cost:" + cost);
}