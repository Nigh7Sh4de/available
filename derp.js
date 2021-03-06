var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ranger = require('./ranger');

var derp = new Schema({
    thing: {
        type: [ranger.Range(Date)],
        get: function(data) {
            return new ranger(data);
        },
        set: function(data) {
            return data.ranges;
        }
    }
})

module.exports = mongoose.model('Derp', derp);
