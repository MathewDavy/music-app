// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA, DebugElement  } from '@angular/core';

// import { GridsContainerComponent } from './grids-container.component';
// import { By } from '@angular/platform-browser';
// import * as Helper from '../../test-helper-functions'
// import { MelodyGridComponent } from '../grids/melody-grid/melody-grid.component';
// import { DrumGridComponent } from '../grids/drum-grid/drum-grid.component';
// import { MelodyGridService } from '../grids/melody-grid/melody-grid.service';
// import { DrumGridService } from '../grids/drum-grid/drum-grid.service';
// import { GridsContainerService } from './grids-container.service';
// import { GridParametersComponent } from '../grid-parameters/grid-parameters.component';
// import { MatButtonModule } from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AddColumnComponent } from '../main-buttons/add-column/add-column.component';
// import { DurationService } from '../column-parameters/select-duration/duration.service';
// import { DeleteColumnComponent } from '../main-buttons/delete-column/delete-column.component';
// import { SelectDurationComponent } from '../column-parameters/select-duration/select-duration.component';

// describe('GridsContainerComponent', () => {
//   let component: GridsContainerComponent;
//   let fixture: ComponentFixture<GridsContainerComponent>;
//   let drumNumCols: number;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({

//       imports: [
//         MatButtonModule,
//         MatMenuModule,
//         BrowserAnimationsModule,
//       ],
//       declarations: [
//         GridsContainerComponent,
//         MelodyGridComponent,
//         DrumGridComponent,
//         GridParametersComponent,
//         AddColumnComponent,
//         DeleteColumnComponent,
//         SelectDurationComponent,],
//         providers: [
//           MelodyGridService,
//           DrumGridService,
//           DurationService
//         ],
//         schemas: [
//           CUSTOM_ELEMENTS_SCHEMA
//         ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(GridsContainerComponent);
//     component = fixture.componentInstance;

//     drumNumCols = component.drumGridService.numColsArr.length;
//     fixture.detectChanges();

//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should not delete a drum grid column when deleting a melody grid column', () => {
//     fixture.debugElement.query(By.css('.delete-column-melody')).nativeElement.click();
//     fixture.detectChanges()
//     expect(component.drumGridService.numColsArr.length).toBe(drumNumCols);
//   });

//   it('should not add a drum grid column when adding a melody grid column', () => {
//       Helper.increaseMaxWidth(component, fixture);
//       fixture.debugElement.query(By.css('.add-column-melody')).nativeElement.click();
//       fixture.detectChanges()
//       expect(component.drumGridService.numColsArr.length).toBe(drumNumCols);
//   });

//    it('should not set the drum grid column duration when setting the melody grid column duration', () => {
//        Helper.increaseMaxWidth(component, fixture);
//        Helper.clickParamBtn("2n", '.melody-duration-btn', fixture)
//        expect(fixture.debugElement.query(By.css('.drum-duration-btn')).nativeElement.textContent).toBe(
//           component.durationService.startingDuration);
//    });

// })

// function getNumOfTiles(fixture: ComponentFixture<GridsContainerComponent>): number {
//   return fixture.debugElement.queryAll(By.css('.app-tile')).length;
// }

// function getExpectedTiles(component: GridsContainerComponent){
//   return (component.melodyGridService.numColsArr.length * component.melodyGridService.notes.length) +
//   (component.drumGridService.numColsArr.length * component.drumGridService.notes.length)
// }
