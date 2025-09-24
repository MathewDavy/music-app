import { Component, OnInit } from '@angular/core';
import { ChordService } from '../../column-parameters/select-chord/chord.service';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { DrumGridService } from '../../grids/drum-grid/drum-grid.service';
import { Grid } from '../../grids/Grid';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';
import { SelectKeyService } from './select-key.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-select-key',
  templateUrl: './select-key.component.html',
  styleUrls: ['./select-key.component.scss'],
  imports: [MatMenuModule],
})
export class SelectKeyComponent {
  constructor(
    public keyService: SelectKeyService,
    private chordGridService: ChordGridService,
    private melodyGridService: MelodyGridService,
    private drumGridService: DrumGridService,
    private chordService: ChordService,
  ) {}

  setKey = (key: string) => {
    this.keyService.currentKey = key;
    this.melodyGridService.stop();
    this.chordGridService.stop();
    this.drumGridService.stop();

    this.melodyGridService.resetGrid();
    this.chordGridService.resetGrid();
    this.drumGridService.resetGrid();

    this.chordService.resetChords();
  };
}
