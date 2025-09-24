import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { MelodyGridService } from '../melody-grid/melody-grid.service';
import { ChordGridService } from './chord-grid.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../../tile/tile.component';
import { VolumeComponent } from '../../main-buttons/volume/volume.component';
import { SynthComponent } from '../../main-buttons/synth/synth.component';
import { SelectChordComponent } from '../../column-parameters/select-chord/select-chord.component';
import { SelectDurationComponent } from '../../column-parameters/select-duration/select-duration.component';

@Component({
  selector: 'app-chord-grid',
  templateUrl: './chord-grid.component.html',
  styleUrls: ['./chord-grid.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    TileComponent,
    VolumeComponent,
    SynthComponent,
    SelectChordComponent,
    SelectDurationComponent,
  ],
})
export class ChordGridComponent implements OnInit, AfterViewInit {
  constructor(
    public durationService: DurationService,
    public melodyGridService: MelodyGridService,
    public chordGridService: ChordGridService,
    private cdref: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    let durations: string[] = [];
    for (let i = 0; i <= this.chordGridService.numColsArr.length; i++) {
      durations.push(this.chordGridService.startingDuration);
    }
    this.durationService.setupMapWidths(
      this.melodyGridService.numColsArr.length,
    );
    this.durationService.setDurations(durations, this.chordGridService);
    this.cdref.detectChanges();
  }
}
