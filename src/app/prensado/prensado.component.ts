import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prensado',
  templateUrl: './prensado.component.html',
  styleUrls: ['./prensado.component.css']
})
export class PrensadoComponent implements OnInit {
  inflacionmensual: string | undefined;
  isLoading: boolean = true;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/inflacionmensual';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.inflacionmensual = data;
        this.isLoading = false; // Marcar como no cargando cuando se obtiene la información
      },
      (error) => {
        console.log('Error al obtener la ultima inflacion mensual:', error);
        this.isLoading = false; // Marcar como no cargando en caso de error también
      }
    );
  }
}