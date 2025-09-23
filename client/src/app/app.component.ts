import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from './services/icon.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MelodyGridComponent } from './components/grids//melody-grid/melody-grid.component';
import { SelectChordComponent } from './components/column-parameters/select-chord/select-chord.component';
import { SelectDurationComponent } from './components/column-parameters/select-duration/select-duration.component';
import { TileComponent } from './components/tile/tile.component';
import { SynthComponent } from './components/main-buttons/synth/synth.component';
import { PlayComponent } from './components/main-buttons/play/play.component';
import { StopComponent } from './components/main-buttons/stop/stop.component';
import { SynthService } from './components/main-buttons/synth/synth-service';
import { VolumeComponent } from './components/main-buttons/volume/volume.component';
import { BpmComponent } from './components/main-buttons/bpm/bpm.component';
import { AddColumnComponent } from './components/main-buttons/add-column/add-column.component';
import { DeleteColumnComponent } from './components/main-buttons/delete-column/delete-column.component';
import { PlayService } from './components/main-buttons/play/play.service';
import { GridsContainerComponent } from './components/grids-container/grids-container.component';
import { DrumGridComponent } from './components/grids/drum-grid/drum-grid.component';
import { GridParametersComponent } from './components/grid-parameters/grid-parameters.component';
import { DurationService } from './components/column-parameters/select-duration/duration.service';
import { GenerateMelodyComponent } from './components/main-buttons/generate-melody/generate-melody.component';
import { SelectKeyComponent } from './components/main-buttons/select-key/select-key.component';
import { ChordGridComponent } from './components/grids/chord-grid/chord-grid.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ToolbarComponent,
    MelodyGridComponent,
    SelectChordComponent,
    SelectDurationComponent,
    TileComponent,
    SynthComponent,
    PlayComponent,
    StopComponent,
    VolumeComponent,
    BpmComponent,
    AddColumnComponent,
    DeleteColumnComponent,
    DrumGridComponent,
    GridParametersComponent,
    GridsContainerComponent,
    GenerateMelodyComponent,
    SelectKeyComponent,
    ChordGridComponent,
  ],
})
export class AppComponent {
  constructor(private iconService: IconService) {}

  ngOnInit() {
    this.iconService.registerIcons();
  }
}
