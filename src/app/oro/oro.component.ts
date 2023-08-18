import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-oro',
  templateUrl: './oro.component.html',
  styleUrls: ['./oro.component.css']
})
export class OroComponent implements OnInit {
  gold: string | undefined;
  isLoading: boolean = true;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/oro';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.gold = data;
        this.isLoading = false; // Marcar como no cargando cuando se obtiene la información
      },
      (error) => {
        console.log('Error al obtener el precio del oro:', error);
        this.isLoading = false; // Marcar como no cargando en caso de error también
      }
    );
  }
}
