function Shop() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function MotorbikeBuilder() {
    this.motorbike = null;

    this.step1 = function () {
        this.motorbike = new motorbike();
    };

    this.step2 = function () {
        this.motorbike.addParts();
    };

    this.get = function () {
        return this.motorbike;
    };
}

function QuadbikeBuilder() {
    this.quadbike = null;

    this.step1 = function () {
        this.quadbike = new quadbike();
    };

    this.step2 = function () {
        this.quadbike.addParts();
    };

    this.get = function () {
        return this.quadbike;
    };
}

function Motorbike() {
    this.wheels = 0;

    this.addParts = function () {
        this.wheels = 2;
    };

    this.say = function () {
        console.log("This is a " + this.wheels + "-wheel bike");
    };
}

function Quadbike() {
    this.wheels = 0;

    this.addParts = function () {
        this.wheels = 4;
    };

    this.say = function () {
        console.log("This is a " + this.wheels + "-wheel bike");
    };
}

function run() {
    let shop = new Shop();
    let motorbikeBuilder = new MotorbikeBuilder();
    let quadbikeBuilder = new QuadbikeBuilder();
    let motorbike = shop.construct(motorbikeBuilder);
    let quadbike = shop.construct(quadbikeBuilder);

    motorbike.say();
    quadbike.say();
}
