import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})

export class TemperatureComponent  implements OnInit {
  temperature: string | undefined;
  loading: boolean = true;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/temperatura').subscribe(
      (data) => {
        this.temperature = data.temperature + "  -  Bs.As.";
        this.loading = false;
      },
      (error) => {
        console.log('Error al obtener la temperatura.', error);
        this.loading = false;
      }
    );
  }
}