import { Injectable } from '@angular/core';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';
import { DrumGridService } from '../../grids/drum-grid/drum-grid.service';
import * as Tone from 'tone';
import { ChordGridService } from '../../grids/chord-grid/chord-grid.service';

const eighthNote: number = 2;
const quarterNote: number = eighthNote * 2;
const halfNote: number = quarterNote * 2;
const wholeNote: number = halfNote * 2;

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  constructor(
    private melodyGridService: MelodyGridService,
    private drumGridService: DrumGridService,
    private chordGridService: ChordGridService,
  ) {}

  play = () => {
    this.melodyGridService.stop();
    this.drumGridService.stop();
    this.chordGridService.stop();

    this.melodyGridService.getMainMelody().start(0);
    this.drumGridService.getDrumMelody().start(0);
    this.chordGridService.getChordMelody().start(0);

    Tone.Transport.loopStart = '0';
    Tone.Transport.loopEnd = this.getTotalDurationTone(
      this.getLongestDurationSum(),
    );
    Tone.Transport.loop = true;

    setTimeout(() => {
      Tone.Transport.start();
    }, 100);
  };

  getLongestDurationSum(): number {
    let allDurationSums: number[] = [];

    allDurationSums.push(
      this.getDurationSum(this.drumGridService.getDurations()),
    );
    allDurationSums.push(
      this.getDurationSum(this.melodyGridService.getDurations()),
    );
    allDurationSums.push(
      this.getDurationSum(this.chordGridService.getDurations()),
    );

    return Math.max(...allDurationSums);
  }

  getDurationSum(durations: string[]): number {
    let totalDurationNum = 0;
    durations.forEach((duration: string) => {
      if (duration === 'eighthNote') {
        totalDurationNum += eighthNote;
      } else if (duration === 'quarterNote') {
        totalDurationNum += quarterNote;
      } else if (duration === 'halfNote') {
        totalDurationNum += halfNote;
      } else if (duration === 'wholeNote') {
        totalDurationNum += wholeNote;
      }
    });
    return totalDurationNum;
  }

  getTotalDurationTone(durationNum: number): string {
    let bars: number = Math.floor(durationNum / wholeNote);
    let beats: number = Math.floor((durationNum % wholeNote) / quarterNote);
    let sixteenths: number =
      (durationNum - (bars * wholeNote + beats * quarterNote)) / eighthNote;

    return bars + ':' + beats + ':' + sixteenths;
  }
}
