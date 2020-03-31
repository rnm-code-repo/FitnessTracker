const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter an exercise type"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter an Exercise name"
    },
    weight: {
      type: Number
    },
    sets: {
      type: Number
    },
    reps: {
      type: Number
    },
    duration: {
      type: Number,
      required:"Enter duration in minutes"
    },
    distance:{
      type:Number,
      required:"Enter distance in miles"
    }

  }]
});
const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;