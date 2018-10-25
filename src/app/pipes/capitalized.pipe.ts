import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizedPipe'})
export class CapitalizedPipe implements PipeTransform {
    transform(value: string, allCapitaliced: boolean = false): any {

        if (allCapitaliced) {
            return value.toLocaleUpperCase();
        } else {
            value = value.toLocaleLowerCase();
            const nombres = value.split(' ');
            const nuevoNombre = [];
            nombres.forEach(nombre => {
                const conv = nombre[0].toLocaleUpperCase() + nombre.substr(1);
                nuevoNombre.push(conv);
            });
            return nuevoNombre.join(' ');
        }
    }
}
