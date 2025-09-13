import { Injectable } from '@angular/core';
import * as Tone from 'tone';
import { PlayService } from '../play/play.service';
import { TileColours } from 'src/app/models/TileColours';

@Injectable({
  providedIn: 'root',
})
export class SynthService {
  public synthsArray: any[];
  public polySynths: Map<string, any> = new Map();

  constructor() {
    let sine = new Tone.Synth();
    let triangle = new Tone.Synth();
    let square = new Tone.Synth();
    let sawtooth = new Tone.Synth();

    sine.oscillator.type = 'sine';
    triangle.oscillator.type = 'triangle';
    sawtooth.oscillator.type = 'sawtooth';
    square.oscillator.type = 'square';

    let polySine = new Tone.PolySynth(6, Tone.Synth, {});
    let polytriangle = new Tone.PolySynth(6, Tone.Synth, {});
    let polysquare = new Tone.PolySynth(6, Tone.Synth, {});
    let polysawtooth = new Tone.PolySynth(6, Tone.Synth, {});
    polySine.voices.forEach((voice) => {
      voice.oscillator.type = 'sine';
    });
    polytriangle.voices.forEach((voice) => {
      voice.oscillator.type = 'triangle';
    });
    polysquare.voices.forEach((voice) => {
      voice.oscillator.type = 'square';
    });
    polysawtooth.voices.forEach((voice) => {
      voice.oscillator.type = 'sawtooth';
    });
    this.polySynths.set('sine', polySine);
    this.polySynths.set('triangle', polytriangle);
    this.polySynths.set('sawtooth', polysquare);
    this.polySynths.set('square', polysawtooth);
    this.synthsArray = Array.from(this.polySynths.keys());
  }

  getSynthName(synth: any): string {
    return (
      synth.oscillator.type.charAt(0).toUpperCase() +
      synth.oscillator.type.slice(1)
    );
  }
}
