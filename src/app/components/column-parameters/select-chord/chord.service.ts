import { Injectable } from '@angular/core';
import { IChord } from '../../../models/IChord';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { ColumnParameter } from '../ColumnParameter';
import { TileColours } from 'src/app/models/TileColours';
import { Grid } from '../../grids/Grid';

@Injectable({
  providedIn: 'root',
})
export class ChordService extends ColumnParameter {
  public startingChord: IChord;
  public chordBtns = [];

  constructor(public chordGridService: ChordGridService) {
        super();

    this.startingChord = { notes: [], name: '-' };
    for (let i = 1; i <= this.chordGridService.numCols; i++) {
      this.chordBtns.push({
        name: this.startingChord.name,
        column: i,
      });
    }
  }

    setChordWithNode = (node: any, chord: IChord, gridService: Grid) => {
      let column: string = node.target.parentNode.getAttribute('column');
      this.setChord(column, chord, gridService);
    };


     setChord = (column: string, chord: IChord, gridService: Grid) => {
      console.log(`app-tile-${gridService.gridType}`);
      let chordBtn = this.chordBtns.find(
        (chordBtn) => chordBtn.column === parseInt(column),
      )
      if (chord.name && chordBtn) {
        chordBtn.name = chord.name;
      }
  
      gridService
        .getColumn(column,  `tile-${gridService.gridType}`)
        .forEach((tile: Element) => {
          tile.setAttribute(
            'style',
            `${this.setStyle(tile, 'background', TileColours.disabled)}`,
          );
          tile.setAttribute('enabled', 'false');
          if (
            chord.notes.find((note: string) => note === tile.getAttribute('note'))
          ) {
            tile.setAttribute(
              'style',
              `${this.setStyle(tile, 'background', TileColours.enabled)}`,
            );
            tile.setAttribute('enabled', 'true');
          }
        });
    };

  resetChords(): void {
    this.chordBtns.forEach((chordBtn) => {
      chordBtn.name = this.startingChord.name;
    });
  }
}
