import * as Tone from "tone";

// External library from https://www.guitarland.com/javascripts/Rhythm.js
// https://www.guitarland.com/MusicTheoryWithToneJS/PlayRhythms.html
export var mergeDurationsAndPitch = function (durations, pitches, startTime) {
  if (pitches == "") return undefined;
  if (startTime == undefined) var myStartTime = 0;
  else var myStartTime = startTime;

  var melody = [];
  var rhythmValue;
  var time_array = processDurationNotation(durations, myStartTime);
  // console.log(time_array)
  var all_durations = processDurationArrays(durations);
  // console.log(all_durations)
  var myDurations = removeRestsFromDurations(all_durations);
  var j = 0;
  var lastDuration = 0;
  for (var i = 0; i < pitches.length; i++) {
    // loop thru the rhythm array until the pitch array is completed.
    j = j % time_array.length;
    rhythmValue = time_array[j]; // j incremented at end of loop

    var oneNote = {};
    Object.defineProperties(oneNote, {
      time: {
        value: rhythmValue,
      },
      note: {
        value: pitches[i],
      },
      duration: {
        value: myDurations[i],
      },
    });
    melody.push(oneNote);

    j++;
    lastDuration = myDurations[i];
  }

  var totalTime = rhythmValue + Tone.TransportTime(lastDuration).toSeconds();
  return melody;
};

function processRestNotation(restNotationValue) {
  var restValue = "";
  for (let i = 0; i < restNotationValue.length; i++) {
    if (restNotationValue.charAt(i) !== "r")
      restValue += restNotationValue.charAt(i);
  }
  return restValue;
}

function processDurationNotation(duration_array, startTime) {
  if (startTime == undefined) var myStartTime = 0;
  else var myStartTime = startTime;

  var nextIsRest = false;
  var restValue = "";
  var t = Tone.Time(startTime); // holds the current accumulated time
  //		var t = Tone.TransportTime(startTime);  // holds the current accumulated time
  var t_array = [];
  t_array.push(t.toSeconds());
  var accum; // holds the accumulated time for associated note's start time (notes and durations are parallel array)
  var current_duration = 0;
  var current_duration_is_rest = false;
  // the first element is the duration of the first note, but that note starts at time zero which as
  // already been added to t_array so the value of duration_array[0]
  // is the start time of notes[1] (if there aren't any rest to consider).
  // in other words duration_array[i] is setting the start time for NEXT note (i+1 of the parallel notes array)
  // this is tricky.
  for (let i = 0; i < duration_array.length; i++) {
    //		    console.log('typeof(duration_array['+i+'])='+typeof(duration_array[i])+' duration_array['+i+']='+duration_array[i]);
    var current_dur_is_array =
      typeof duration_array[i] === "object" ? true : false;
    if (current_dur_is_array) {
      // add the values together
      for (let idx = 0; idx < duration_array[i].length; idx++) {
        var array_value = duration_array[i][idx];
        current_duration = current_duration + Tone.Time(array_value);
        current_duration_is_rest = duration_array[i][idx].includes("r");
      }
    } else {
      current_duration = duration_array[i];
      current_duration_is_rest = duration_array[i].includes("r");
    }

    // check if the next element in the array is a rest
    if (
      i < duration_array.length - 2 &&
      typeof (duration_array[i + 1] === "string") &&
      duration_array[i + 1].includes("r")
    ) {
      nextIsRest = true;
    } else if (
      i < duration_array.length - 2 &&
      typeof (duration_array[i + 1] === "object") &&
      duration_array[i + 1][0].includes("r")
    ) {
      nextIsRest = true;
    } else {
      nextIsRest = false;
    }

    // if current loop isn't rest (it's a note)
    if (current_duration_is_rest === false) {
      accum = Tone.Time(t + Tone.Time(current_duration));
      if (!nextIsRest) {
        // add accum to t_array, reset for repeat
        t_array.push(accum.valueOf());
      }
      t = Tone.Time(accum.valueOf());
    } else {
      // current loop is a rest
      restValue = processRestNotation(current_duration);
      accum = Tone.Time(t + Tone.Time(restValue));
      if (i === 0) {
        // if the first duration is a rest, clear t_array
        t_array = [];
      }
      if (!nextIsRest) {
        // add accum to t_array, reset for repeat
        t_array.push(accum.valueOf());
      }
      t = Tone.Time(accum.valueOf());
    }
    current_duration_is_rest = false;
    nextIsRest = false;
    current_duration = 0;
  }
  return t_array;
}

function processDurationArrays(durs) {
  var durations = [];
  for (let i = 0; i < durs.length; i++) {
    var current_dur_is_array = typeof durs[i] === "object" ? true : false;
    if (current_dur_is_array) {
      durations.push(processDurationArrayIntoSingleDuration(durs[i]));
    } else {
      durations.push(durs[i]);
    }
  }
  return durations;
}

function processDurationArrayIntoSingleDuration(duration_array) {
  var single_duration = 0;
  var duration;
  var is_rest = false;
  for (let i = 0; i < duration_array.length; i++) {
    single_duration = Tone.Time(single_duration + Tone.Time(duration_array[i]));
    is_rest = duration_array[i].includes("r") ? true : false;
  }
  duration = single_duration.toNotation();
  if (is_rest) {
    duration = duration + "r";
  }
  return duration;
}

function removeRestsFromDurations(duration_array) {
  var newDurations = [];
  for (let i = 0; i < duration_array.length; i++) {
    if (duration_array[i].includes("r") === false) {
      newDurations.push(duration_array[i]);
    }
  }
  return newDurations;
}
