import { Component, HostListener } from '@angular/core';
import { DbService } from '../db.service';
import { MatMenuModule } from '@angular/material/menu';
import { ChordService } from '../../column-parameters/select-chord/chord.service';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { TickIcon } from '../../icons/tickIcon.component';
import { ISong } from 'src/app/models/ISong';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

export class App { }
@Component({
  selector: 'app-save-song',
  imports: [MatMenuModule, TickIcon, ReactiveFormsModule],
  templateUrl: './save-song.component.html',
  styleUrl: './save-song.component.scss'
})
export class SaveSongComponent {

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

  saveSong = () => {

    const song: ISong = {
      chordGrid: this.getGridJson(this.chordGridService.getChordMelody(), this.chordGridService.synthName),
      melodyGrid: this.getGridJson(this.melodyGridService.getMainMelody(), this.melodyGridService.synthName),
      name: this.form.value.name,
    }

     this.dbService.saveSong(song).pipe( switchMap((data: any) => {
        this.showTick = true;
        return this.dbService.getSongs();
     })).subscribe({
       next: (response: HttpResponse<any>) => {
        this.dbService.songs = response.body
       }
     })

  };

  getGridJson = (melody, synth) => {
    console.log(melody)
    return {
      columns: melody._events.map((event) => {
        return {
         
            notes: event.value.note,
          duration: this.chordGridService.parseToneJSDuration(event.value.duration)}
        
      }),
      synth
    }
  }

}
