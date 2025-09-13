import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';

import { AddColumnComponent } from './add-column.component';
import { SynthService } from '../synth/synth-service';

describe('AddColumnComponent', () => {
  let component: AddColumnComponent;
  let fixture: ComponentFixture<AddColumnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddColumnComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColumnComponent);
    component = fixture.componentInstance;
    component.gridService = new MelodyGridService(new SynthService());

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
