import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridParametersComponent } from './grid-parameters.component';

describe('GridParametersComponent', () => {
  let component: GridParametersComponent;
  let fixture: ComponentFixture<GridParametersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GridParametersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
