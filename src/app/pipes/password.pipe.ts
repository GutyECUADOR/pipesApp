import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordPipe'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, show: false): any {
    const arrayPass = [];
    const pass = value.split(''); // Dividimos el stirng en un array
    pass.forEach(element => {
      arrayPass.push('*'); 
    });

    if (show) {
      return value;
    } else {
      return arrayPass.join(''); // Unimos el array
    }
  }
}
