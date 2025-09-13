import { Input } from '@angular/core';

export abstract class ColumnParameter {
  constructor() {}

  setStyle(element: Element, setThisAttr: string, attrValue: string): string {
    let currentStyle: string = element.getAttribute('style');
    let newStyle: string = '';

    if (currentStyle !== null) {
      let attributes: string[] = element
        .getAttribute('style')
        .split(';')
        .map((attribute: string) => attribute.trim())
        .filter((attribute: string) => attribute !== '');

      for (let i = attributes.length - 1; i >= 0; i--) {
        if (attributes[i].substring(0, setThisAttr.length) === setThisAttr) {
          attributes.splice(i, 1);
        }
      }

      attributes.forEach((attribute: string) => (newStyle += attribute + '; '));
    }

    newStyle += setThisAttr + ': ' + attrValue + ';';
    return newStyle;
  }
}
