function Flyweight(make, model, engine) {
    this.make = make;
    this.model = model;
    this.engine = engine;
};

let FlyWeightFactory = (function () {
    let flyweights = {};

    return {

        get: function (make, model, engine) {
            if (!flyweights[make + model]) {
                flyweights[make + model] =
                    new Flyweight(make, model, engine);
            }
            return flyweights[make + model];
        },

        getCount: function () {
            let count = 0;
            for (let f in flyweights) count++;
            return count;
        }
    }
})();

function CarCollection() {
    let cars = {};
    let count = 0;

    return {
        add: function (make, model, engine, tires, tag) {
            cars[tag] =
                new Car(make, model, engine, tires, tag);
            count++;
        },

        get: function (tag) {
            return cars[tag];
        },

        getCount: function () {
            return count;
        }
    };
}

let Car = function (make, model, engine, tires, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, engine);
    this.tires = tires;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
}

function run() {
    let cars = new CarCollection();

    cars.add("Mini", "Cooper", "1.6 Litre", "Off-road", "Y755P");
    cars.add("Mini", "Cooper", "1.6 Litre", "Racing", "X997T");
    cars.add("Mini", "Cooper", "1.6 Litre", "Standard", "U8U80");
    cars.add("Mini", "Cooper", "1.6 Litre", "Standard", "NT777");
    cars.add("Mini", "Cooper", "1.6 Litre", "Standard", "0J88A");
    cars.add("volkswagen", "Beetle", "1.6 Litre", "Specialised", "CNU883701");
    cars.add("volkswagen", "Beetle", "1.6 Litre", "Standard", "TXU003283");

    console.log("cars: " + cars.getCount());
    console.log("Flyweights: " + FlyWeightFactory.getCount());
}