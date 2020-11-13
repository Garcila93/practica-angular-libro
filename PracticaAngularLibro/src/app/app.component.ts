import { Component } from '@angular/core';
import libros from 'src/assets/json/books.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PracticaAngularLibro';
  public listaLibros:{id:number,titulo:string,autor:string,editorial:string,descripcion:string}[]=libros;
 
}
