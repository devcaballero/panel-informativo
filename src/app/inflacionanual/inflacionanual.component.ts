import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inflacionanual',
  templateUrl: './inflacionanual.component.html',
  styleUrls: ['./inflacionanual.component.css']
})
export class InflacionanualComponent implements OnInit {
  inflacionanualizada: string | undefined;
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/inflacionanualizada';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.inflacionanualizada = data;
        this.isLoading = false; // Marcar como no cargando cuando se obtiene la información
      },
      (error) => {
        console.log('Error al obtener los datos de la inflacion anual:', error);
        this.isLoading = false; // Marcar como no cargando en caso de error también
      }
    );
  }
}