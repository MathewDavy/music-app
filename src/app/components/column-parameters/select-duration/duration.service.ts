import { Injectable } from '@angular/core';
import { Grid } from '../../grids/Grid';

interface IDuration {
  duration: string;
  column: number;
}

@Injectable({
  providedIn: 'root',
})
export class DurationService {
  public widths: Map<string, number> = new Map();
  public quarterNote: number;
  public maxGridWidth: number;

  constructor() {}

  setupMapWidths(numCols: number): void {
    this.quarterNote = document
      .getElementsByClassName('app-tile-melody')[0]
      .getBoundingClientRect().width;
    this.maxGridWidth = this.quarterNote * numCols;

    this.widths.set('wholeNote', this.quarterNote * 4);
    this.widths.set('halfNote', this.quarterNote * 2);
    this.widths.set('quarterNote', this.quarterNote);
    this.widths.set('eighthNote', this.quarterNote / 2);
  }

  getNewCurrentWidth(
    column: number,
    duration: string,
    durationBtns: IDuration[],
  ): number {
    let currentGridWidth = 0;
    durationBtns
      .filter((btn) => btn.column !== column)
      .forEach((btn) => {
        currentGridWidth += this.widths.get(btn.duration);
      });
    currentGridWidth += this.widths.get(duration);
    return currentGridWidth;
  }

  getCurrentWidth(durationBtns: IDuration[]): number {
    let currentGridWidth = 0;
    durationBtns.forEach((btn) => {
      currentGridWidth += this.widths.get(btn.duration);
    });
    return currentGridWidth;
  }

  setDuration = (
    duration: string,
    gridService: Grid,
    event?: any,
    columnNum?: string | number,
  ) => {
    try {
      let column: string =
        columnNum.toString() || event.target.parentNode.getAttribute('column');

      let columnParameters: Element[] = Array.from(
        document.getElementsByClassName(
          `${gridService.gridType}-param-btn-${column}`,
        ),
      );
      let width: number = this.widths.get(duration);

      if (
        this.getNewCurrentWidth(
          parseInt(column),
          duration,
          gridService.durationBtns,
        ) <= this.maxGridWidth
      ) {
        gridService.durationBtns.find(
          (durationBtn) => durationBtn.column === parseInt(column),
        ).duration = duration;

        columnParameters.forEach((columnParameter: HTMLElement) => {
          columnParameter.style.width = width + 'px';
        });

        gridService
          .getColumn(column, `app-tile-${gridService.gridType}`)
          .forEach((tile: HTMLElement) => {
            tile.style.width = width + 'px';
          });
      }
    } catch (e) {
      this.setDuration(
        duration,
        gridService,
        undefined,
        event.path[2].getAttribute('column'),
      );
    }
  };

  setDurations(durations: string[], gridService: Grid): void {
    for (let i = 0; i < durations.length; i++) {
      this.setDuration(durations[i], gridService, undefined, i + 1 + '');
    }
  }
}
