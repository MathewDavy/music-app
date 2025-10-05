import { Injectable } from '@angular/core';
import { IChord } from '../../../models/IChord';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { ColumnParameter } from '../ColumnParameter';
import { TileColours } from 'src/app/models/TileColours';
import { Grid } from '../../grids/Grid';
import { SelectKeyService } from '../../main-buttons/select-key/select-key.service';

@Injectable({
  providedIn: 'root',
})
export class ChordService extends ColumnParameter {
  public startingChord: IChord;
  public chordBtns = [];

  constructor(public chordGridService: ChordGridService, public selectKeyService: SelectKeyService) {
    super();

    this.startingChord = { notes: [], name: '-' };
    for (let i = 1; i <= this.chordGridService.numCols; i++) {
      this.chordBtns.push({
        name: this.startingChord.name,
        column: i,
      });
    }
  }

  setChordWithNode = (node: any, notes: string[], gridService: Grid) => {
    let column: string = node.target.parentNode.getAttribute('column');
    this.setChord(column, notes, gridService);
  };


  setChord = (column: string, notes: string[], gridService: Grid) => {
    let chordBtn = this.chordBtns.find(
      (chordBtn) => chordBtn.column === parseInt(column),
    )
    if (chordBtn) {
      for (const [key, value] of this.selectKeyService.keyChords) {
        let chordName = value.find((chord: IChord) => chord.notes.length === notes.length && chord.notes.every((value, index) => value === notes[index]))?.name;
        console.log('found name:', chordName, notes);
        if (chordName) {
          console.log('Found chord name:', chordName);
          chordBtn.name = chordName;
          break;
        }
      }

    }

    gridService
      .getColumn(column, `tile-${gridService.gridType}`)
      .forEach((tile: Element) => {
        tile.setAttribute(
          'style',
          `${this.setStyle(tile, 'background', TileColours.disabled)}`,
        );
        tile.setAttribute('enabled', 'false');
        if (
          notes.find((note: string) => note === tile.getAttribute('note'))
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
