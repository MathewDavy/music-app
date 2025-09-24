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

}
