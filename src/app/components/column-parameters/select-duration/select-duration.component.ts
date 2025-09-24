import {
  Component,
  Input,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { ColumnParameter } from '../ColumnParameter';
import { DurationService } from './duration.service';
import { Grid } from '../../grids/Grid';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';
import { WholeNoteIcon } from '../../icons/wholeNoteIcon.component';
import { HalfNoteComponent } from '../../icons/halfNoteIcon.component';
import { QuarterNoteComponent } from '../../icons/quarterNote.component';
import { EighthNoteIcon } from '../../icons/eighthNoteIcon.component';

@Component({
  selector: 'app-select-duration',
  templateUrl: './select-duration.component.html',
  styleUrls: ['./select-duration.component.scss'],
  imports: [
    MatIconModule,
    MatMenuModule,
    WholeNoteIcon,
    HalfNoteComponent,
    QuarterNoteComponent,
    EighthNoteIcon,
  ],
})
export class SelectDurationComponent extends ColumnParameter {
  public durationArray: string[];
  @Input() gridService: Grid;

  constructor(public durationService: DurationService) {
    super();
    this.durationArray = ['wholeNote', 'halfNote', 'quarterNote', 'eighthNote'];
  }
}
