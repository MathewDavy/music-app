import * as Tone from 'tone';

export const fileUrls: Map<string, any> = new Map([
  [
    'kick',
    new Tone.Player('https://drum-sounds.herokuapp.com/kick.mp3').toMaster(),
  ],
  [
    'snare',
    new Tone.Player('https://drum-sounds.herokuapp.com/snare.mp3').toMaster(),
  ],
  [
    'hihat',
    new Tone.Player('https://drum-sounds.herokuapp.com/hi-hat.mp3').toMaster(),
  ],
]);
