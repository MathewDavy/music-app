import { Injectable } from '@angular/core';
import { IChord } from '../../../models/IChord';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';

@Injectable({
  providedIn: 'root',
})
export class ChordService {
  public startingChord: IChord;
  public chordBtns = [];

  constructor(public chordGridService: ChordGridService) {
    this.startingChord = { notes: [], name: '-' };
    for (let i = 1; i <= this.chordGridService.numCols; i++) {
      this.chordBtns.push({
        name: this.startingChord.name,
        column: i,
      });
    }
  }

  resetChords(): void {
    this.chordBtns.forEach((chordBtn) => {
      chordBtn.name = this.startingChord.name;
    });
  }
}
