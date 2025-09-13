import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { ChordService } from '../../column-parameters/select-chord/chord.service';
import { Grid } from '../../grids/Grid';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss'],
  imports: [MatIconModule],
})
export class AddColumnComponent implements OnInit {
  @Input() gridService: Grid;

  constructor(
    public durationService: DurationService,
    public chordService: ChordService,
  ) {}

  ngOnInit(): void {}

  addColumn = () => {
    if (
      this.durationService.getCurrentWidth(this.gridService.durationBtns) <=
      this.durationService.maxGridWidth -
        this.durationService.widths.get(this.gridService.startingDuration)
    ) {
      this.gridService.durationBtns.push({
        duration: this.gridService.startingDuration,
        column:
          this.gridService.durationBtns[
            this.gridService.durationBtns.length - 1
          ].column + 1,
      });
      if (this.gridService.constructor.name === ChordGridService.name) {
        this.chordService.chordBtns.push({
          name: this.chordService.startingChord.name,
          column: this.chordService.chordBtns.length + 1,
        });
      }

      this.gridService.numColsArr.push(this.gridService.numColsArr.length + 1);

      setTimeout(() => {
        this.durationService.setDuration(
          this.gridService.startingDuration,
          this.gridService,
          undefined,
          this.gridService.durationBtns.length + '',
        );
      }, 0);
    }
  };
}
