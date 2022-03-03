let Mortgage = function (name) {
    this.name = name;
}

Mortgage.prototype = {

    applyFor: function (amount) {
        let result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    }
}

let Bank = function () {
    this.verify = function (name, amount) {
        return true;
    }
}

var Credit = function () {
    this.get = function (name) {
        return true;
    }
}

var Background = function () {
    this.check = function (name) {
        return true;
    }
}

function run() {
    let mortgage = new Mortgage("Alex");
    let result = mortgage.applyFor("£200,000");

    console.log(result);
}
