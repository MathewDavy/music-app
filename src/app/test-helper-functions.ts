import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

export function increaseMaxWidth(
  component: any,
  fixture: ComponentFixture<any>,
): void {
  component.durationService.maxGridWidth +=
    component.durationService.quarterNote;
  fixture.detectChanges();
}

export function clickParamBtn(
  paramValue: string,
  btnClass: string,
  fixture: ComponentFixture<any>,
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
  fixture: ComponentFixture<any>,
): HTMLElement {
  return fixture.debugElement.queryAll(By.css(btnClass))[0].nativeElement;
}
