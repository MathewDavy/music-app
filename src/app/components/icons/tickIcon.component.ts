import { Component, AfterViewInit, input } from '@angular/core';

@Component({
    selector: 'svg[tick]',
    template: `

<svg   x="0px"
      y="0px"
      width="24px"
      height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.29417 12.9577L10.5048 16.1681L17.6729 9" stroke="green" stroke-width="2.5" stroke-linecap="round"
        stroke-linejoin="round" />
    <circle cx="12" cy="12" r="10" stroke="green" stroke-width="2" />
</svg>
  `,
    host: {
        '[attr.viewBox]': 'viewBox()',
    },
})
export class TickIcon {
    readonly viewBox = input<string>('0 0 24 24');
}
