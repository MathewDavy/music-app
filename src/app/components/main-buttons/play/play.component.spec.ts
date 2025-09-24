import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayComponent } from './play.component';
import { SynthService } from '../../main-buttons/synth/synth-service';
import { By } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { PlayService } from './play.service';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;
  let synthService: SynthService;
  let durations: string[] = ['8n', '4n', '2n', '1n'];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSliderModule],
      declarations: [PlayComponent],
      providers: [SynthService, PlayService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set volume to slider value', () => {
    // component.synthService.setVolumeToSlider();
    // expect(component.synthService.volume).toBe(component.synthService.calculateVolume(parseInt(component.synthService.slider)));
  });

  it('getDurationSum() should convert the duration strings to the right number', () => {
    expect(component.playService.getDurationSum(durations)).toBe(
      2 + 4 + 8 + 16,
    );
  });

  it('getLongestDurationSum() should return the duration list with the greatest duration sum', () => {
    let duration1: string[] = ['4n', '4n'];
    let duration2: string[] = ['4n', '2n'];
    expect(component.playService.getLongestDurationSum()).toBe(
      component.playService.getDurationSum(duration1),
    );
  });

  it('getTotalDurationTone() should convert the total duration sum to a ToneJS value', () => {
    expect(component.playService.getTotalDurationTone(30)).toBe('1:3:1');
  });
});
