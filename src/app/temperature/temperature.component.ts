import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
  template: `
    <div *ngIf="weatherData">
      Temperatura actual: {{ weatherData }}
    </div>
  `
})
export class TemperatureComponent implements OnInit {
  
  temperature: number | undefined;


  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
    this.temperatureService.getTimeline().subscribe(
      (weatherData) => {
        this.temperature = weatherData;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

}


