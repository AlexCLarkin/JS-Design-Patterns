let Factory = function () {
    this.createProduct = function (type) {
        let product;

        if (type === "Xbox") {
            product = new Xbox();
        } else if (type === "ps5") {
            product = new PS5();
        } else if (type === "switch") {
            product = new Switch();

        product.type = type;

        product.say = function () {
            console.log(this.type + ": Price " + this.price);
        }

        return product;
    }
}

let Xbox = function () {
    this.price = "£449.99";
};

let PS5 = function () {
    this.price = "£449.99";
};

let Switch = function () {
    this.price = "£259.99";
};

function run() {

    let product = [];
    let factory = new Factory();

    product.push(factory.createProduct("xbox"));
    product.push(factory.createProduct("ps5"));
    product.push(factory.createProduct("switch"));

    for (let i = 0, len = product.length; i < len; i++) {
        product[i].say();
    }
}}