import { Injectable } from '@angular/core';
import { Grid } from '../Grid';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import * as Rhythm from '../../../Rhythm';
import * as Tone from 'tone';
import { TileColours } from 'src/app/models/TileColours';
import { SynthService } from '../../main-buttons/synth/synth-service';
import { Icons } from '../../../models/Icons';

@Injectable({
  providedIn: 'root',
})
export class MelodyGridService extends Grid {
  constructor(public synthService: SynthService) {
    super(
      'melody',
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
      'quarterNote',
      8,
      'triangle',
    );
  }

  getMainMelody() {
    return this.getMelody(this.playMainNotes);
  }

  playMainNotes = (value: any, time: number) => {
    this.polySynth.triggerAttackRelease(value.note, value.duration, time);
  };
}
