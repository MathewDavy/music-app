// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA, DebugElement  } from '@angular/core';

// import { SelectDurationComponent } from './select-duration.component';
// import { MatButtonModule } from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { By } from '@angular/platform-browser';
// import { DurationService } from './duration.service';
// import { MelodyGridService } from '../../grids/melody-grid/melody-grid.service';
// import { SynthService } from '../../main-buttons/synth/synth-service';

// describe('SelectDurationComponent', () => {

//   let component: SelectDurationComponent;
//   let fixture: ComponentFixture<SelectDurationComponent>;
//   let durationBtn: HTMLElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         MatButtonModule,
//         MatMenuModule,
//         BrowserAnimationsModule
//       ],
//       declarations: [ SelectDurationComponent ],
//       providers: [
//         DurationService
//       ],
//       schemas: [
//         CUSTOM_ELEMENTS_SCHEMA
//       ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {

//     fixture = TestBed.createComponent(SelectDurationComponent);
//     component = fixture.componentInstance;
//     component.gridService = new MelodyGridService(new SynthService);
//     fixture.detectChanges();
//     durationBtn = fixture.debugElement.query(By.css('.melody-duration-btn')).nativeElement;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//  it('should show a dropdown with the right length on click', () => {
//     durationBtn.click();
//     expect(getMenuBtns(fixture).length).toBe(component.durationsArray.length);
//   })

//   it('should have starting duration text', () => {
//     expect(durationBtn.textContent).toBe(component.durationService.startingDuration)
//   })
// })

// function getMenuBtns(fixture: ComponentFixture<SelectDurationComponent>): DebugElement[] {
//   return fixture.debugElement.queryAll(By.css('.mat-menu-item'));
// }
