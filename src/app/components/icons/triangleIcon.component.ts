import { Component, AfterViewInit, input } from '@angular/core';

@Component({
  selector: 'svg[triangle]',

  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"
        fill="black"
      />
    </svg>
  `,
  host: {
    '[attr.viewBox]': 'viewBox()',
  },
})
export class TriangleIcon {
  readonly viewBox = input<string>('0 0 24 24');
}
