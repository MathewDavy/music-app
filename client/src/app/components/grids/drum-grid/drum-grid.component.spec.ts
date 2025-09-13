import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumGridComponent } from './drum-grid.component';

describe('DrumGridComponent', () => {
  let component: DrumGridComponent;
  let fixture: ComponentFixture<DrumGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DrumGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
