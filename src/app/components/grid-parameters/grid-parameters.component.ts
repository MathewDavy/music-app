import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlayComponent } from '../main-buttons/play/play.component';
import { StopComponent } from '../main-buttons/stop/stop.component';
import { GenerateMelodyComponent } from '../main-buttons/generate-melody/generate-melody.component';
import { SelectKeyComponent } from '../main-buttons/select-key/select-key.component';
import { BpmComponent } from '../main-buttons/bpm/bpm.component';

@Component({
  selector: 'app-grid-parameters',
  templateUrl: './grid-parameters.component.html',
  styleUrls: ['./grid-parameters.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    PlayComponent,
    StopComponent,
    GenerateMelodyComponent,
    SelectKeyComponent,
    BpmComponent,
  ],
})
export class GridParametersComponent {
  constructor() {}
}
