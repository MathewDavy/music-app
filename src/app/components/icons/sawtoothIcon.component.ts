import { Component, AfterViewInit, input } from '@angular/core';

@Component({
  selector: 'svg[sawtooth]',

  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
    >
      <path
        d="M11 22V6.83L2 16v-2.83L13 2v15.17L22 8v2.83L11 22z"
        fill="black"
      />
      <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
    </svg>
  `,
  host: {
    '[attr.viewBox]': 'viewBox()',
  },
})
export class SawtoothIcon {
  readonly viewBox = input<string>('0 0 24 24');
}
