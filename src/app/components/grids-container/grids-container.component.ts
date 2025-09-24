import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GridParametersComponent } from '../grid-parameters/grid-parameters.component';
import { ChordGridComponent } from '../grids/chord-grid/chord-grid.component';
import { MelodyGridComponent } from '../grids/melody-grid/melody-grid.component';

@Component({
  selector: 'app-grids-container',
  templateUrl: './grids-container.component.html',
  styleUrls: ['./grids-container.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [GridParametersComponent, ChordGridComponent, MelodyGridComponent],
})
export class GridsContainerComponent {
  constructor() {}
}
