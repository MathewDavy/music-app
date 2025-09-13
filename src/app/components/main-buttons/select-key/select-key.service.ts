import { Injectable } from '@angular/core';
import { IChord } from 'src/app/models/IChord';

@Injectable({
  providedIn: 'root',
})
export class SelectKeyService {
  public keyNotes: Map<string, string[]> = new Map();
  public keyChords: Map<string, IChord[]> = new Map();
  public currentKey: string = 'Cm';
  public keysArray: string[] = [];

  constructor() {
    this.keyNotes.set('Am', ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', '-']);
    this.keyNotes.set('Cm', ['C4', 'D4', 'D#4', 'F4', 'G4', 'G#4', 'A#4', '-']);

    this.keyChords.set('Am', [
      {
        notes: [],
        name: '-',
      },
      {
        notes: ['A4', 'C4', 'E4'],
        name: 'Am',
      },
      {
        notes: ['F4', 'A4', 'C4'],
        name: 'F',
      },
      {
        notes: ['C4', 'E4', 'G4'],
        name: 'C',
      },
      {
        notes: ['G4', 'B4', 'D4'],
        name: 'G',
      },
      {
        notes: ['D4', 'F4', 'A4'],
        name: 'Dm',
      },
      {
        notes: ['E4', 'G4', 'B4'],
        name: 'Em',
      },
    ]);

    this.keyChords.set('Cm', [
      {
        notes: [],
        name: '-',
      },
      {
        notes: ['C4', 'D#4', 'G4'],
        name: 'Cm',
      },
      {
        notes: ['G#4', 'C4', 'D#4'],
        name: 'G#',
      },
      {
        notes: ['D#4', 'G4', 'A#4'],
        name: 'D#',
      },
      {
        notes: ['A#4', 'D4', 'F4'],
        name: 'F',
      },
      {
        notes: ['F4', 'G#4', 'C4'],
        name: 'Fm',
      },
      {
        notes: ['G4', 'A#4', 'D4'],
        name: 'Dm',
      },
    ]);

    this.keysArray = Array.from(this.keyNotes.keys());
  }

  getCurrentKeyNotes(): string[] {
    return this.keyNotes.get(this.currentKey);
  }
}
