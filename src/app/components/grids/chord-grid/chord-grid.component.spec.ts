import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordGridComponent } from './chord-grid.component';

describe('ChordGridComponent', () => {
  let component: ChordGridComponent;
  let fixture: ComponentFixture<ChordGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChordGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
