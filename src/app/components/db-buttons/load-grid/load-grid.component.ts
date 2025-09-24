import { Component } from '@angular/core';
import { DbService } from '../db.service';
import { MatMenuModule } from '@angular/material/menu';
import { ChordService } from '../../column-parameters/select-chord/chord.service';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';

@Component({
  selector: 'app-load-grid',
  imports: [MatMenuModule],
  templateUrl: './load-grid.component.html',
  styleUrl: './load-grid.component.scss'
})
export class LoadGridComponent {

  constructor(
    public dbService: DbService,
    private chordService: ChordService,
    private durationService: DurationService,
    private chordGridService: ChordGridService,
    private melodyGridService: MelodyGridService

  ) {
  }

  loadGrid = (id: number) => {
    const grid = this.dbService.grids.find(grid => grid.id === id);
    console.log(this.dbService.grids);

    grid.chordGrid.forEach((column, index) => {
      this.chordService.setChord(index + 1 + '', column.chord, this.chordGridService);
      this.durationService.setDuration(column.duration.duration, this.chordGridService, null, index + 1);
    });
     grid.melodyGrid.forEach((column, index) => {
      this.chordService.setChord(index + 1 + '', column.chord, this.melodyGridService);
      this.durationService.setDuration(column.duration.duration, this.melodyGridService, null, index + 1);
    });

  };

}
