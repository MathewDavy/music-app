import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { DrumGridService } from '../../grids/drum-grid/drum-grid.service';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';
import { MatIconModule } from '@angular/material/icon';
import { StopIcon } from '../../icons/stopIcon.component';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss'],
  imports: [MatIconModule, StopIcon],
})
export class StopComponent implements OnInit {
  constructor(
    private melodyGridService: MelodyGridService,
    private drumGridService: DrumGridService,
    private chordGridService: ChordGridService,
  ) {}

  ngOnInit(): void {}

  stop = () => {
    this.melodyGridService.stop();
    this.chordGridService.stop();
    this.drumGridService.stop();
  };
}
