import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MelodyGridComponent } from './melody-grid.component';
import { TileComponent } from '../../tile/tile.component';
import { SelectChordComponent } from '../../column-parameters/select-chord/select-chord.component';
import { SelectDurationComponent } from '../../column-parameters/select-duration/select-duration.component';
// import { ResetComponent } from '../../main-buttons/reset/reset.component';
import { VolumeComponent } from '../../main-buttons/volume/volume.component';
import { SynthService } from '../../main-buttons/synth/synth-service';
import { DurationService } from '../../column-parameters/select-duration/duration.service';
import { SynthComponent } from '../../main-buttons/synth/synth.component';
import { IChord } from '../../../models/IChord';
import { AddColumnComponent } from '../../main-buttons/add-column/add-column.component';
import { DeleteColumnComponent } from '../../main-buttons/delete-column/delete-column.component';
import * as Helper from '../../../test-helper-functions';
import { GenerateMelodyComponent } from '../../main-buttons/generate-melody/generate-melody.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MelodyGridService } from './melody-grid.service';
import { GridsContainerService } from '../../grids-container/grids-container.service';

describe('MelodyGridComponent', () => {
  let component: MelodyGridComponent;
  let fixture: ComponentFixture<MelodyGridComponent>;
  let chord: string = 'G';
  let duration: string = '2n';
  let synth: string = 'triangle';
  let durationBtn: HTMLElement;
  let numCols: number;
  let addColumnBtn: HTMLElement;
  let deleteColumnBtn: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule],
      declarations: [
        MelodyGridComponent,
        TileComponent,
        SelectChordComponent,
        SelectDurationComponent,
        // ResetComponent,
        SynthComponent,
        VolumeComponent,
        AddColumnComponent,
        DeleteColumnComponent,
        GenerateMelodyComponent,
      ],
      providers: [
        SynthService,
        DurationService,
        MelodyGridService,
        GridsContainerService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelodyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    numCols = component.melodyGridService.numColsArr.length;
    durationBtn = fixture.debugElement.query(
      By.css('.melody-duration-btn'),
    ).nativeElement;
    // component.durationService.setupMapWidths(numCols);
    addColumnBtn = fixture.debugElement.query(
      By.css('.add-column-melody'),
    ).nativeElement;
    deleteColumnBtn = fixture.debugElement.query(
      By.css('.delete-column-melody'),
    ).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the right amount of tiles', () => {
    expect(getNumOfTiles(fixture)).toBe(
      component.melodyGridService.numColsArr.length *
        component.melodyGridService.notes.length,
    );
  });

  it('should render the right amount of keys', () => {
    let keys: DebugElement[] = fixture.debugElement.queryAll(By.css('.key'));
    expect(keys.length).toBe(component.melodyGridService.notes.length);
  });

  it('should set the tile width to starting width', () => {
    // expect(getTileWidth(fixture)).toBe(component.durationService.startingWidth)
  });

  it('should enable correct tiles when selecting a chord', () => {
    clickParamBtn(chord, '.chord-btn', fixture);
    let allChords: IChord[] = fixture.debugElement.query(
      By.directive(SelectChordComponent),
    ).componentInstance.chordsArray;
    let notesToCheck: string[] = allChords.find(
      (ichord: IChord) => ichord.name === chord,
    ).notes;
    let enabledTiles: DebugElement[] = getEnabledTiles(fixture);

    expect(enabledTiles.length).toBe(notesToCheck.length);
    //check that the right tiles are enabled
    for (let i = 0; i < enabledTiles.length; i++) {
      expect(
        notesToCheck.find(
          (note: string) => note === enabledTiles[i].attributes.note,
        ),
      ).toBeDefined();
    }
  });

  it('should set correct tile width and button text when selecting duration when there is enough space', () => {
    Helper.increaseMaxWidth(component, fixture);
    clickParamBtn(duration, '.melody-duration-btn', fixture);
    // expect(getTileWidth(fixture)).toBe(component.durationService.widths.get(duration))
    expect(durationBtn.textContent).toBe(duration);
  });

  it('should not set tile width and button text when selecting duration when there is not enough space', () => {
    clickParamBtn(duration, '.melody-duration-btn', fixture);
    // expect(getTileWidth(fixture)).toBe(component.durationService.startingWidth);
    // expect(durationBtn.textContent).toBe(component.durationService.startingDuration);
  });

  it('should add a column when there is enough space', () => {
    Helper.increaseMaxWidth(component, fixture);
    addColumnBtn.click();
    fixture.detectChanges();
    expect(component.melodyGridService.numColsArr.length).toBe(numCols + 1);
    expect(getNumOfTiles(fixture)).toBe(getExpectedTiles(component));
  });

  it('should not add a column when there is not enough space', () => {
    addColumnBtn.click();
    fixture.detectChanges();
    expect(component.melodyGridService.numColsArr.length).toBe(numCols);
    expect(getNumOfTiles(fixture)).toBe(getExpectedTiles(component));
  });

  it('should delete a column when there is more than one', () => {
    deleteColumnBtn.click();
    fixture.detectChanges();
    expect(component.melodyGridService.numColsArr.length).toBe(numCols - 1);
    expect(getNumOfTiles(fixture)).toBe(getExpectedTiles(component));
  });

  it('should not delete a column when there is only one', () => {
    component.melodyGridService.numColsArr = [1];
    fixture.detectChanges();
    deleteColumnBtn.click();
    fixture.detectChanges();
    expect(component.melodyGridService.numColsArr.length).toBe(1);
    expect(getNumOfTiles(fixture)).toBe(getExpectedTiles(component));
  });

  it('should enable random tiles when clicking the generate melody button', () => {
    fixture.debugElement
      .query(By.css('#generate-melody'))
      .nativeElement.click();
    fixture.detectChanges();
    let numEnabledTiles = 0;
    component.melodyGridService.getColumnsEnabledTiles().forEach((column) => {
      numEnabledTiles += column.length;
    });
    expect(numEnabledTiles).toBe(6);
  });

  // it('should reset the tile width and duration name when clicking the reset button', () => {
  //   clickParamBtn(duration, '.duration-btn', fixture);
  //   clickResetButton(fixture);
  //   expect(getTileWidth(fixture)).toBe(component.durationService.startingWidth);
  //   expect(getParamBtn('.duration-btn', fixture).textContent).toBe(component.durationService.startingDuration)
  // })

  // it('should reset the enabled tiles and chord name when clicking the reset button', () => {
  //   clickParamBtn(chord, '.chord-btn', fixture);
  //   clickResetButton(fixture);
  //   expect(getEnabledTiles(fixture).length).toBe(0);
  //   expect(getParamBtn('.chord-btn', fixture).textContent).toBe(component.chordService.startingChord.name)
  // })
});

function clickParamBtn(
  paramValue: string,
  btnClass: string,
  fixture: ComponentFixture<MelodyGridComponent>,
): void {
  getParamBtn(btnClass, fixture).click();
  let menuItems: DebugElement[] = fixture.debugElement.queryAll(
    By.css('.mat-menu-item'),
  );
  menuItems
    .find(
      (menuItem: DebugElement) =>
        menuItem.nativeElement.textContent === paramValue,
    )
    .nativeElement.click();
  fixture.detectChanges();
}

function getParamBtn(
  btnClass: string,
  fixture: ComponentFixture<MelodyGridComponent>,
): HTMLElement {
  return fixture.debugElement.queryAll(By.css(btnClass))[0].nativeElement;
}

function getTileWidth(fixture: ComponentFixture<MelodyGridComponent>): number {
  let firstColumn: DebugElement[] = fixture.debugElement
    .queryAll(By.css('.app-tile'))
    .filter((tile: DebugElement) => tile.attributes.column === '1');
  return parseFloat(firstColumn[0].nativeElement.getBoundingClientRect().width);
}

function getEnabledTiles(
  fixture: ComponentFixture<MelodyGridComponent>,
): DebugElement[] {
  return fixture.debugElement
    .queryAll(By.css('.tile-melody'))
    .filter(
      (tile: DebugElement) =>
        tile.attributes.column === '1' && tile.attributes.enabled === 'true',
    );
}

function clickResetButton(
  fixture: ComponentFixture<MelodyGridComponent>,
): void {
  let resetBtn: HTMLElement = fixture.debugElement.query(
    By.css('#reset'),
  ).nativeElement;
  resetBtn.click();
  fixture.detectChanges();
}

function getNumOfTiles(fixture: ComponentFixture<MelodyGridComponent>): number {
  return fixture.debugElement.queryAll(By.css('.app-tile-melody')).length;
}

function getExpectedTiles(component: MelodyGridComponent) {
  return (
    component.melodyGridService.numColsArr.length *
    component.melodyGridService.notes.length
  );
}
