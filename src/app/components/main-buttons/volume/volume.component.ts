import { Component, OnInit, NgModule, Input } from '@angular/core';
import { SynthService } from '../synth/synth-service';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { Grid } from '../../grids/Grid';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { VolumeIcon } from '../../icons/volumeIcon.component';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss'],
  imports: [MatSliderModule, MatIconModule, VolumeIcon],
})
export class VolumeComponent implements OnInit {
  @Input() gridService: Grid;
  public sliderPos = '50';

  constructor() {}

  ngOnInit(): void {}

  onChange = (volume) => {
    if (volume) {
      this.gridService.polySynth.volume.value = this.calculateVolume(volume);
      this.gridService.polySynth.toMaster();
    }
  };

  calculateVolume(value: number): number {
    if (value > 50) {
      return -12 + (value - 50) / 3;
    } else if (value === 0) {
      return -10000;
    } else {
      return -12 - (50 - value) / 2;
    }
  }
}
