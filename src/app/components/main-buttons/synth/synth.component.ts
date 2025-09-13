import { Component, OnInit, Input } from '@angular/core';
import { SynthService } from './synth-service';
import { Grid } from '../../grids/Grid';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SawtoothIcon } from '../../icons/sawtoothIcon.component';
import { SineIcon } from '../../icons/sineIcon.component';
import { TriangleIcon } from '../../icons/triangleIcon.component';
import { SquareIcon } from '../../icons/squareIcon.component';

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss'],
  imports: [
    MatIconModule,
    MatMenuModule,
    SawtoothIcon,
    SineIcon,
    TriangleIcon,
    SquareIcon,
  ],
})
export class SynthComponent {
  @Input() gridService: Grid;

  constructor(public synthService: SynthService) {}

  setSynth = (synth: string) => {
    // this.gridService.synthName = synth
    this.gridService.setSynth(synth);
  };
}
