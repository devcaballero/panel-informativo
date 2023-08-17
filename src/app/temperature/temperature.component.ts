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
    const url = 'https://price-webscraper.onrender.com/temperatura';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.temperature = data.substring(0, 4);
      },
      (error) => {
        console.log('Error al obtener la temperatura:', error);
      }
    );
  }

}


