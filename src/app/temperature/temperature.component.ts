import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  
  temperature: string | undefined;

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/api/v1/temperatura';
    this.apiService.getData(url).subscribe(
      (data) => {
        const temperature = parseFloat(data); // Convertir la cadena a un número decimal
        
        if (temperature > 10) {
          this.temperature = data.substring(0, 4); // Si es mayor a 10, usar substring de 0 a 4
        } else {
          this.temperature = data.substring(0, 3); // Si es menor o igual a 10, usar substring de 0 a 3
        }
      },
      (error) => {
        console.log('Error al obtener la temperatura:', error);
      }
    );
  }

}


