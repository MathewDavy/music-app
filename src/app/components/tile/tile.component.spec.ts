import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TileComponent } from './tile.component';
import { TileColours } from '../../models/TileColours';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;
  let tile: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TileComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    // component.gridType = 'melody'
    fixture.detectChanges();
    tile = fixture.debugElement.query(By.css('.tile-melody')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle enabled attribute on click', () => {
    tile.click();
    expect(JSON.parse(tile.getAttribute('enabled'))).toBeTrue();

    tile.click();
    expect(JSON.parse(tile.getAttribute('enabled'))).toBeFalse();
  });

  it('should set right colour on click', () => {
    tile.click();
    expect(tile.style.background).toBe(TileColours.enabled);
  });
});
