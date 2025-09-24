import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-bpm',
  templateUrl: './bpm.component.html',
  styleUrls: ['./bpm.component.scss'],
  imports: [MatSliderModule],
})
export class BpmComponent implements OnInit {
  public slider: number;
  public min: number;
  public max: number;

  constructor() {
    this.min = 50;
    this.max = 300;
    this.slider = (this.max - this.min) / 2 + this.min;
  }

  ngOnInit(): void {}

  onChange(value: number): void {
    console.log(value);
    if (value) {
      Tone.Transport.bpm.value = value;
    }
    // Tone.Transport.bpm.value = value;
    // return value
  }
}
