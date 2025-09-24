import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopComponent } from './stop.component';
import { SynthService } from '../../main-buttons/synth/synth-service';
import { By } from '@angular/platform-browser';

describe('StopComponent', () => {
  let component: StopComponent;
  let fixture: ComponentFixture<StopComponent>;
  let synthService: SynthService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StopComponent],
      providers: [SynthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
