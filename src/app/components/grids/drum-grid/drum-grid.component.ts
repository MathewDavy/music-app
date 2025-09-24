import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DrumGridService } from './drum-grid.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-drum-grid',
  templateUrl: './drum-grid.component.html',
  styleUrls: ['./drum-grid.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DrumGridComponent implements AfterViewInit {
  constructor(public drumGridService: DrumGridService) {}

  ngAfterViewInit(): void {}
}
