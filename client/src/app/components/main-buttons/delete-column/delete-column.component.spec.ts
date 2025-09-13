import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';

import { DeleteColumnComponent } from './delete-column.component';
import { SynthService } from '../synth/synth-service';

describe('DeleteColumnComponent', () => {
  let component: DeleteColumnComponent;
  let fixture: ComponentFixture<DeleteColumnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteColumnComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteColumnComponent);
    component = fixture.componentInstance;
    component.gridService = new MelodyGridService(new SynthService());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
