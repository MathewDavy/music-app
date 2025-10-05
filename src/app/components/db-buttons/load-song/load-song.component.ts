import { Component } from '@angular/core';
import { DbService } from '../db.service';
import { MatMenuModule } from '@angular/material/menu';
import { ChordService } from '../../column-parameters/select-chord/chord.service';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';

@Component({
  selector: 'app-load-song',
  imports: [MatMenuModule],
  templateUrl: './load-song.component.html',
  styleUrl: './load-song.component.scss'
})
export class LoadSongComponent {

  constructor(
    public dbService: DbService,
    private chordService: ChordService,
    private durationService: DurationService,
    private chordGridService: ChordGridService,
    private melodyGridService: MelodyGridService

  ) {
  }

  public song;

  loadSong = (id: number) => {
    this.song = this.dbService.songs.find(song => song.id === id);

    this.song.chordGrid.columns.forEach((column, index) => {
      this.chordService.setChord(index + 1 + '', column.notes, this.chordGridService);
      this.durationService.setDuration(column.duration.duration, this.chordGridService, null, index + 1);
    });
     this.song.melodyGrid.columns.forEach((column, index) => {
      this.chordService.setChord(index + 1 + '', column.notes, this.melodyGridService);
      this.durationService.setDuration(column.duration.duration, this.melodyGridService, null, index + 1);
    });

  };

}
