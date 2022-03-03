var datastore = {
    process: function () {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};

function inherit(proto) {
    var F = function() { };
    F.prototype = proto;
    return new F();
}

function run() {
    var mysql = inherit(datastore);

    mysql.connect = function () {
        console.log("MySQL: connect step");
    }
    mysql.select = function () {
        console.log("MySQL: select step");
    }
    mysql.disconnect = function () {
        console.log("MySQL: disconnect step");
    }

    mysql.process();

}