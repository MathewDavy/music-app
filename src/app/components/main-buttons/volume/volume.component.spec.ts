import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeComponent } from './volume.component';
import { SynthService } from '../../main-buttons/synth/synth-service';
import { By } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { DebugElement } from '@angular/core';

describe('VolumeComponent', () => {
  let component: VolumeComponent;
  let fixture: ComponentFixture<VolumeComponent>;
  let synthService: SynthService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSliderModule],
      declarations: [VolumeComponent],
      providers: [SynthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the volume when moving the slider', () => {
    let slider: DebugElement = fixture.debugElement.query(By.css('#volume'));
    slider.triggerEventHandler('input', { value: -40 });
    // expect(component.synthService.volume).toBe(component.synthService.calculateVolume(-40))
  });
});
