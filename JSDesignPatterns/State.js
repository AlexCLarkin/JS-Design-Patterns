var TrafficLight = function () {
    var count = 0;
    var currentState = new Red(this);

    this.change = function (state) {
        //limits number of changes for demonstration purposes
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    };
}

var Red = function (light) {
    this.light = light;

    this.go = function () {
        this.light = light;

        console.log("Red --> for 1 minute");
        light.change(new Green(light));
        
    }
};

var Yellow = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Yellow --> for 10 seconds");
        light.change(new Red(light));
    }
};

var Green = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Green --> for 1 minute");
        light.change(new Yellow(light));
    }
};

function run() {

    var light = new TrafficLight();
    light.start();
}