import { Component, AfterViewInit, input } from '@angular/core';

@Component({
  selector: 'svg[square]',

  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 5v14H5V5h14m2-2H3v18h18V3z" fill="black" />
    </svg>
  `,
  host: {
    '[attr.viewBox]': 'viewBox()',
  },
})
export class SquareIcon {
  readonly viewBox = input<string>('0 0 24 24');
}
