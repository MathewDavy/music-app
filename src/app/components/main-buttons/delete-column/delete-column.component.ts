import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { ChordService } from '../../column-parameters/select-chord/chord.service';
import { Grid } from '../../grids/Grid';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-column',
  templateUrl: './delete-column.component.html',
  styleUrls: ['./delete-column.component.scss'],
  imports: [MatIconModule],
})
export class DeleteColumnComponent implements OnInit {
  @Input() gridService: Grid;

  constructor(
    public durationService: DurationService,
    public chordService: ChordService,
  ) {}

  ngOnInit(): void {}

  deleteColumn = () => {
    if (this.gridService.numColsArr.length > 1) {
      this.gridService.durationBtns.pop();
      if (this.gridService.constructor.name === ChordGridService.name) {
        this.chordService.chordBtns.pop();
      }
      this.gridService.numColsArr.pop();
    }
  };
}
