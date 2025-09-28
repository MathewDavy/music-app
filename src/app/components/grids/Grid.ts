import { IDuration } from 'src/app/models/IDuration';
import { DurationService } from '../column-parameters/select-duration/duration.service';
import { IChord } from 'src/app/models/IChord';
import { SynthService } from '../main-buttons/synth/synth-service';
import { AfterViewInit } from '@angular/core';
import { TileColours } from 'src/app/models/TileColours';
import * as Rhythm from '../../Rhythm';
import * as Tone from 'tone';

export abstract class Grid {
  public gridType: string;
  public notes: string[];
  public numColsArr: number[];
  public durationBtns: IDuration[] = [];
  private durationService: DurationService = new DurationService();
  public startingDuration: string;
  public numCols: number;
  public synthName: string;
  public polySynth: any;
  public synthService: SynthService = new SynthService();

  constructor(
    gridType: string,
    notes: string[],
    startingDuration: string,
    numCols: number,
    synthName?: string,
  ) {
    this.notes = notes;
    this.startingDuration = startingDuration;
    this.numCols = numCols;
    this.synthName = synthName;
    this.polySynth = this.synthService.polySynths.get(synthName || 'sine');
    this.polySynth.volume.value = -12;

    this.gridType = gridType;
    this.numColsArr = [];
    for (let i = 1; i <= this.numCols; i++) {
      this.numColsArr.push(i);
    }

    for (let i = 1; i <= this.numColsArr.length; i++) {
      this.durationBtns.push({
        duration: this.startingDuration,
        column: i,
      });
    }
  }

  setSynth(synth) {
    this.synthName = synth;
    const volume: number = this.polySynth?.volume?.value;

    this.polySynth = this.synthService.polySynths.get(this.synthName);

    this.polySynth.volume.value = volume;
    this.polySynth.toMaster();
  }

  getDurations(): string[] {
    return this.durationBtns.map((durationBtn) => durationBtn.duration);
  }

  getDurationsToneJS(): string[] {
    return this.durationBtns
      .map((durationBtn) => durationBtn.duration)
      .map((duration) => this.getToneJSDuration(duration));
  }

  getToneJSDuration(duration: string): string {
    if (duration === 'wholeNote') {
      return '1n';
    } else if (duration === 'halfNote') {
      return '2n';
    }
    if (duration === 'quarterNote') {
      return '4n';
    }
    if (duration === 'eighthNote') {
      return '8n';
    }
  }

   parseToneJSDuration(duration: string): string {
    if (duration === '1n') {
      return 'wholeNote';
    } else if (duration === '2n') {
      return 'halfNote';
    }
    if (duration === '4n') {
      return 'quarterNote';
    }
    if (duration === '8n') {
      return 'eighthNote';
    }
  }

  resetDurations(): void {
    this.durationBtns.forEach((durationBtn) => {
      durationBtn.duration = this.startingDuration;
    });
    Array.from(
      document.getElementsByClassName(`${this.gridType}-param-btn`),
    ).forEach((btn: HTMLElement) => {
      btn.style.width =
        this.durationService.widths.get(this.startingDuration) + 'px';
    });
  }

  getColumns(): Element[][] {
    let numCols: number = this.numColsArr.length;
    let tilesElem: Element[] = this.getTiles();

    let columns: Element[][] = Array.from(Array(numCols));

    //need to initialise columns to be 8 arrays each with an empty array
    for (let i = 0; i < columns.length; i++) {
      if (columns[i] === undefined) {
        columns[i] = [];
      }
    }

    for (let i = 0; i < tilesElem.length; i++) {
      columns[i % numCols].push(tilesElem[i]);
    }
    return columns;
  }

  getChords(): IChord[] {
    let chords: IChord[] = [];

    this.getColumnsEnabledTiles().forEach((column: HTMLElement[]) => {
      chords.push({
        notes: column.map((tile: HTMLElement) => tile.getAttribute('note')),
      });
    });

    chords.forEach((chord: IChord) => {
      if (chord.notes.length === 0) {
        chord.notes = [''];
      }
    });
    return chords;
  }

  getColumnsEnabledTiles(): Element[][] {
    let columnsEnabledTiles = this.getColumns();

    return columnsEnabledTiles.map((column: Element[]) => {
      return column.filter(
        (tile: Element) => tile.getAttribute('enabled') === 'true',
      );
    });
  }

  getTiles(): Element[] {
    return Array.from(document.getElementsByClassName(`tile-${this.gridType}`));
  }

  getMelody(playNotes) {
    var melody = Rhythm.mergeDurationsAndPitch(
      this.getDurationsToneJS(),
      this.getChords().map((chord: IChord) => chord.notes),
    );

    let current = 0;
    let prev = current;
    let columnsEnabledTiles: Element[][] = this.getColumnsEnabledTiles();
    let numCols = this.numColsArr.length;

    return new Tone.Part((time, value) => {
      columnsEnabledTiles[prev % numCols].forEach((tile: Element) => {
        tile.setAttribute('style', `background: ${TileColours.enabled};`);
      });
      columnsEnabledTiles[current % numCols].forEach((tile: Element) => {
        tile.setAttribute('style', 'background: rgb(169,43,226);');
      });

      playNotes(value, time);
      prev = current;
      current++;
    }, melody);
  }

  stop(): void {
    Tone.Transport.stop();
    Tone.Transport.cancel();

    this.getColumnsEnabledTiles().forEach((column: Element[]) => {
      column.forEach((tile: Element) => {
        tile.setAttribute('style', `background: ${TileColours.enabled};`);
      });
    });
  }

  resetGrid(): void {
    this.durationService.setupMapWidths(this.numCols);
    this.clearGrid();
    this.resetDurations();
  }

  clearGrid(): void {
    let backTileElems: Element[] = Array.from(
      document.getElementsByClassName(`app-tile-${this.gridType}`),
    );
    backTileElems.forEach((tile: Element) => {
      tile.setAttribute(
        'style',
        `width: ${this.durationService.widths.get(this.startingDuration)}px;`,
      );
    });

    let frontTileElems: Element[] = Array.from(
      document.getElementsByClassName(`tile-${this.gridType}`),
    );
    frontTileElems.forEach((tile: Element) => {
      tile.setAttribute('style', `background: ${TileColours.disabled};`);
      tile.setAttribute('enabled', 'false');
    });
  }

  fillGrid(notes: string[]): void {
    let columns: Element[][] = this.getColumns();
    let tile: Element;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i] !== '-') {
        tile = columns[i].find(
          (tile: Element) => tile.getAttribute('note') === notes[i],
        );
        tile.setAttribute('style', `background: ${TileColours.enabled};`);
        tile.setAttribute('enabled', 'true');
      }
    }
  }

  getColumn(column: string, columnClass: string): Element[] {
    return Array.from(document.getElementsByClassName(columnClass)).filter(
      (tileElem: Element) => tileElem.getAttribute('column') === column,
    );
  }
}
