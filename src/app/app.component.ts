import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre = 'José Gutiérrez';
  public nombreLOWER = 'joSé guTiéRRez';
  public myarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public PI = Math.PI;
  public salario = 260.50;
  public heroe = {
    'nombre' : 'Wolverine',
    'persona' : 'Logan',
    'Direccion': {
      'Casa': '123',
      'Ciudad' : 'Quito'
    }
  };

  public promesa = new Promise( (resolve) => {
    const time = 5000;
    setTimeout(() => {
      resolve('La data llego despues de:' + time + 'mils');
    }, time);
  });

  public fechaActual = new Date();
  public YouTubeID = 'sBc-rNrNyEc';
  public password = 'guty2018$$';
  public isPassShow = false;


  public showPass() {
    this.isPassShow = !this.isPassShow;
  }
}
