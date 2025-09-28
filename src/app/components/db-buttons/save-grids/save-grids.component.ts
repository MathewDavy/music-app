import { Component, HostListener } from '@angular/core';
import { DbService } from '../db.service';
import { MatMenuModule } from '@angular/material/menu';
import { ChordService } from '../../column-parameters/select-chord/chord.service';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { TickIcon } from '../../icons/tickIcon.component';
import { IGrids } from 'src/app/models/IGrids';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
export class App { }
@Component({
  selector: 'app-save-grids',
  imports: [MatMenuModule, TickIcon, ReactiveFormsModule],
  templateUrl: './save-grids.component.html',
  styleUrl: './save-grids.component.scss'
})
export class SaveGridsComponent {

  constructor(
    public dbService: DbService,
    private chordService: ChordService,
    private durationService: DurationService,
    private chordGridService: ChordGridService,
    private melodyGridService: MelodyGridService

  ) {
  }

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  public showTick = false;

  get name() {
    return this.form.get('name');
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.showTick = false;
  }

  saveGrids = () => {

    const grids: IGrids = {
      chordGrid: this.getGridJson(this.chordGridService.getChordMelody()),
      melodyGrid: this.getGridJson(this.melodyGridService.getMainMelody()),
      name: this.form.value.name,
    }

    this.dbService.saveGrids(grids).subscribe({

      next: (response: HttpResponse<any>) => {
        this.showTick = true;
        // setTimeout(() => {
        //   this.showTick = false;
        // }, 2000);
        console.log('Grid saved successfully:', response);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error saving grid:', error);
      }

    })
  };

  getGridJson = (gridObj) => {
    return gridObj._events.map((event) => {
      return {
        notes: event.value.note,
        duration: this.chordGridService.parseToneJSDuration(event.value.duration),
      }
    })
  }

}
