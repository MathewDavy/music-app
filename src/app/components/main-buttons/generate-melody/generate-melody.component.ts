import { Component, OnInit } from '@angular/core';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { ChordService } from '../../column-parameters/select-chord/chord.service';
import { PlayService } from '../play/play.service';
import { SelectKeyService } from '../select-key/select-key.service';

import { MatIconModule } from '@angular/material/icon';
import { MelodyIcon } from '../../icons/melodyIcon.component';

@Component({
  selector: 'app-generate-melody',
  templateUrl: './generate-melody.component.html',
  styleUrls: ['./generate-melody.component.scss'],
  imports: [MatIconModule, MelodyIcon],
})
export class GenerateMelodyComponent implements OnInit {
  public keyNotesProb: Map<string, string[]> = new Map();
  public durationsProb: string[] = ['eighthNote', 'quarterNote', 'halfNote'];

  constructor(
    private melodyGridService: MelodyGridService,
    private durationService: DurationService,
    private playService: PlayService,
    private keyService: SelectKeyService,
  ) {
    this.setupNotesProb();
    this.setupDurationsProb();
  }

  ngOnInit(): void {}

  generateMelody = () => {
    this.melodyGridService.stop();

    let numNotes = this.melodyGridService.numColsArr.length;
    this.melodyGridService.clearGrid();
    this.melodyGridService.fillGrid(this.getRandomNotes(numNotes));

    this.durationService.setDurations(
      this.getRandomDurations(numNotes),
      this.melodyGridService,
    );

    setTimeout(() => {
      this.playService.play();
    }, 100);
  };

  getRandomDurations(numDurations: number): string[] {
    let ranDUrations: string[] = [];
    for (let i = 0; i < numDurations; i++) {
      ranDUrations.push(
        this.durationsProb[
          Math.floor(Math.random() * this.durationsProb.length)
        ],
      );
    }
    return ranDUrations;
  }

  getRandomNotes(numNotes: number): string[] {
    let notes: string[] = this.keyNotesProb.get(this.keyService.currentKey);

    let ranNotes: string[] = [];
    for (let i = 0; i < numNotes; i++) {
      ranNotes.push(notes[Math.floor(Math.random() * notes.length)]);
    }
    return ranNotes;
  }

  setupNotesProb(): void {
    this.keyService.keysArray.forEach((key: string) => {
      let notes: string[] = this.keyService.keyNotes.get(key);
      let notesProb: string[] = [];

      for (let i = 0; i < notes.length; i++) {
        for (let ii = 0; ii < 3; ii++) {
          notesProb.push(notes[i]);
        }
        //Increase probability of selecting the root or the fifth
        if (i === 0 || i === 4) {
          notesProb.push(notes[i]);
        }
      }
      //Decrease probability of selecting a blank
      notesProb.pop();
      this.keyNotesProb.set(key, notesProb);
    });
  }

  setupDurationsProb() {
    for (let i = 0; i < 7; i++) {
      this.durationsProb.push('quarterNote');
    }
  }
}
