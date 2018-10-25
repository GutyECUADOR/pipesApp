import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'DOMSeguro'
})
export class DOMSeguroPipe implements PipeTransform {

  constructor(private DomSanatizer: DomSanitizer) {}

  transform(value: any, url: string): any {
    return this.DomSanatizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
