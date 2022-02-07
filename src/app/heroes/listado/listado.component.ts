import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string [] = ['Pajaro loco', 'Super raton','Felix el gato', 'Centella'];
  
  heroeBorrado: string = ''; 
  
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';


  }
}
