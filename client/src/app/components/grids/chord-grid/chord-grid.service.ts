import { Injectable } from '@angular/core';
import { Grid } from '../Grid';
import { SynthService } from '../../main-buttons/synth/synth-service';

@Injectable({
  providedIn: 'root',
})
export class ChordGridService extends Grid {
  constructor(public synthService: SynthService) {
    super(
      'chord',
      [
        'C4',
        'C#4',
        'D4',
        'D#4',
        'E4',
        'F4',
        'F#4',
        'G4',
        'G#4',
        'A4',
        'A#4',
        'B4',
      ].reverse(),
      'halfNote',
      4,
      'sine',
    );
  }

  getChordMelody() {
    return this.getMelody(this.playChords);
  }

  playChords = (value: any, time: number) => {
    this.polySynth.triggerAttackRelease(value.note, value.duration, time);
  };
}
