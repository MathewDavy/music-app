import { Injectable } from '@angular/core';
import { Grid } from '../Grid';

import { fileUrls } from '../../../../file-urls';
import { Icons } from '../../../models/Icons';

@Injectable({
  providedIn: 'root',
})
export class DrumGridService extends Grid {
  constructor() {
    super('drum', ['kick', 'snare', 'hihat'], 'quarterNote', 8);
  }

  getDrumMelody() {
    return this.getMelody(this.playDrumNotes);
  }

  playDrumNotes(value: any, time: number): void {
    if (value.note[0] !== '') {
      value.note.forEach((note: string) => {
        fileUrls.get(note).start(time, 0, value.duration);
      });
    }
  }
}
