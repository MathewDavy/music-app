import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthComponent } from './synth.component';
import { SynthService } from './synth-service';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';

import * as Tone from 'tone';

describe('SynthComponent', () => {
  let component: SynthComponent;
  let fixture: ComponentFixture<SynthComponent>;
  let synthBtn: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [SynthComponent],
      providers: [SynthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    synthBtn = fixture.debugElement.query(By.css('#synth')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a synth', () => {
    // expect(synthBtn.innerText).toBe(component.synthService.getSynthName());

    component.setSynth('triangle');
    fixture.detectChanges();
    expect(synthBtn.innerText).toBe('triangle');
  });
});
