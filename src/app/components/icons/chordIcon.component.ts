import { Component, AfterViewInit, input } from '@angular/core';

@Component({
  selector: 'svg[chord]',

  template: `
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style="enable-background:new 0 0 512 512;"
      xml:space="preserve"
      height="24px"
      width="24px"
    >
      <g>
        <g>
          <path
            d="M464,0H48C21.49,0,0,21.49,0,48v416c0,26.51,21.49,48,48,48h416c26.51,0,48-21.49,48-48V48C512,21.49,490.51,0,464,0z
			 M112,480H48c-8.837,0-16-7.163-16-16V48c0-8.837,7.163-16,16-16h32v240c0,8.837,7.163,16,16,16h16V480z M240,480h-96V288h16
			c8.837,0,16-7.163,16-16V32h32v240c0,8.837,7.163,16,16,16h16V480z M368,480h-96V288h16c8.837,0,16-7.163,16-16V32h32v240
			c0,8.837,7.163,16,16,16h16V480z M480,464c0,8.837-7.163,16-16,16h-64V288h16c8.837,0,16-7.163,16-16V32h32
			c8.837,0,16,7.163,16,16V464z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  `,
  host: {
    '[attr.viewBox]': 'viewBox()',
  },
})
export class ChordIcon {
  readonly viewBox = input<string>('0 0 24 24');
}
