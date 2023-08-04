import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fechaActual: string = ''; // Inicialización con cadena vacía
  horaActual: string = '';
  showClock: boolean = false;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.getFechaActual();
    this.showClock = true; // Mostrar el reloj después de obtener la fecha actual
    this.updateClock();

    setInterval(() => {
      this.getFechaActual();
    }, 1800000);

  }

  getFechaActual(): void {
    const fecha = new Date();
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();

    this.fechaActual = `${diaSemana}, ${dia} de ${mes} de ${anio}`;
  }

  updateClock(): void {
    setInterval(() => {
      const fecha = new Date();
      const hora = this.datePipe.transform(fecha, 'HH:mm:ss', 'es');
      this.horaActual = hora || 'Hora no disponible';
    }, 1000);
  }

}
