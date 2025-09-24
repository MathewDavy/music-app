import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMelodyComponent } from './generate-melody.component';

describe('GenerateMelodyComponent', () => {
  let component: GenerateMelodyComponent;
  let fixture: ComponentFixture<GenerateMelodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateMelodyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMelodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
