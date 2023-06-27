import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tipos_apoyo';
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';

  capturar() {
    this.verSeleccion = this.opcionSeleccionado;
  }

}
