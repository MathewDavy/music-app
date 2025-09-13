import { Component, Input, AfterViewInit } from '@angular/core';
import { TileColours } from '../../models/TileColours';
import { SynthService } from '../main-buttons/synth/synth-service';
import { DurationService } from '../column-parameters/select-duration/duration.service';
import * as Tone from 'tone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { fileUrls } from '../../../file-urls';
import { Grid } from '../grids/Grid';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TileComponent {
  @Input() column: string;
  @Input() note: string;
  @Input() gridService: Grid;

  constructor() {}

  clickTile = (event: any) => {
    let tile: Element = event.currentTarget;
    let enabled: boolean = JSON.parse(tile.getAttribute('enabled'));
    console.log('here');

    if (!enabled) {
      if (
        this.gridService.gridType === 'melody' ||
        this.gridService.gridType === 'chord'
      ) {
        this.gridService.polySynth.triggerAttackRelease(this.note, '8n');
      } else if (this.gridService.gridType === 'drum') {
        fileUrls.get(this.note).start(Tone.now(), 0, '8n');
      }
      tile.setAttribute(
        'style',
        `${tile.getAttribute(`style`)}; background: ${TileColours.enabled}`,
      );
      tile.setAttribute('enabled', 'true');
    } else {
      tile.setAttribute(
        'style',
        `${tile.getAttribute(`style`)}; background: ${TileColours.disabled}`,
      );
      tile.setAttribute('enabled', 'false');
    }
  };
}
