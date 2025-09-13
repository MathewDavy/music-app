import { Component, OnInit } from '@angular/core';
import { SynthService } from '../synth/synth-service';

import { PlayService } from './play.service';
import { DrumGridService } from '../../grids/drum-grid/drum-grid.service';

import { MatIconModule } from '@angular/material/icon';
import { PlayIcon } from '../../icons/playIcon.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  providers: [PlayService],
  imports: [MatIconModule, PlayIcon],
})
export class PlayComponent implements OnInit {
  constructor(public playService: PlayService) {}

  ngOnInit(): void {}

  play = () => {
    this.playService.play();
  };
}
