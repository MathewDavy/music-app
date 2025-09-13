// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA, DebugElement  } from '@angular/core';
// import { By } from '@angular/platform-browser';

// import { SelectChordComponent } from './select-chord.component';

// import { MatButtonModule } from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ChordService } from './chord.service';

// describe('SelectChordComponent', () => {
//   let component: SelectChordComponent;
//   let fixture: ComponentFixture<SelectChordComponent>;
//   let chordBtn: HTMLElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         MatButtonModule,
//         MatMenuModule,
//         BrowserAnimationsModule
//       ],
//       declarations: [ SelectChordComponent ],
//       providers: [ChordService],
//       schemas: [
//         CUSTOM_ELEMENTS_SCHEMA
//       ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SelectChordComponent);
//     component = fixture.componentInstance;
//     component.chordService.createBtns();
//     fixture.detectChanges();
//    chordBtn = fixture.debugElement.queryAll(By.css('.chord-btn'))[0].nativeElement;
//   });

//   it('should create', () => {

//     expect(component).toBeTruthy();
//   });

//   it('should show a dropdown with the right length on click', () => {
//     chordBtn.click();
//     expect(getMenuBtns(fixture).length).toBe(component.chordsArray.length);
//   })

//   it('shoud set the chord name', () => {
//     expect(chordBtn.textContent).toBe(component.chordService.startingChord.name);
//     chordBtn.click();
//     let menuItem: HTMLElement = getMenuBtns(fixture)[0].nativeElement;
//     menuItem.click();
//     fixture.detectChanges();
//     expect(chordBtn.textContent).toBe(menuItem.innerText);
//   })
// });

// function getMenuBtns(fixture: ComponentFixture<SelectChordComponent>): DebugElement[] {
//   return fixture.debugElement.queryAll(By.css('.mat-menu-item'));
// }
