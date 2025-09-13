import { Component, AfterViewInit } from '@angular/core';
import { MelodyGridService } from './melody-grid.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../../tile/tile.component';
import { VolumeComponent } from '../../main-buttons/volume/volume.component';
import { SynthComponent } from '../../main-buttons/synth/synth.component';
import { VolumeIcon } from '../../icons/volumeIcon.component';
import { SelectDurationComponent } from '../../column-parameters/select-duration/select-duration.component';

@Component({
  selector: 'app-melody-grid',
  templateUrl: './melody-grid.component.html',
  styleUrls: ['./melody-grid.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    TileComponent,
    VolumeComponent,
    SynthComponent,
    VolumeIcon,
    SelectDurationComponent,
  ],
})
export class MelodyGridComponent implements AfterViewInit {
  constructor(public melodyGridService: MelodyGridService) {}

  ngAfterViewInit(): void {
    //want the melody grid to have 7 columns but still need to set 8 in constructor
    this.melodyGridService.durationBtns.pop();
    this.melodyGridService.numColsArr.pop();
  }
}
