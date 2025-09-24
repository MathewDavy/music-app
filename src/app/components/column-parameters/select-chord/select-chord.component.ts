import { Component } from '@angular/core';
import { IChord } from '../../../models/IChord';
import { TileColours } from '../../../models/TileColours';
import { ColumnParameter } from '../ColumnParameter';
import { ChordService } from './chord.service';
import { SelectKeyService } from '../../main-buttons/select-key/select-key.service';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';
import { ChordIcon } from '../../icons/chordIcon.component';

@Component({
  selector: 'app-select-chord',
  templateUrl: './select-chord.component.html',
  styleUrls: ['./select-chord.component.scss'],
  imports: [MatIconModule, MatMenuModule, ChordIcon],
})
export class SelectChordComponent extends ColumnParameter {
  public chords: Map<string, IChord> = new Map();

  constructor(
    public chordService: ChordService,
    public chordGridService: ChordGridService,
    public keyService: SelectKeyService,
  ) {
    super();
  }

  setChord = (event: any, chord: IChord) => {
    let column: string = event.target.parentNode.getAttribute('column');
    this.chordService.chordBtns.find(
      (chordBtn) => chordBtn.column === parseInt(column),
    ).name = chord.name;

    this.chordGridService
      .getColumn(column, 'tile-chord')
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
}
