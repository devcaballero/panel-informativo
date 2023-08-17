import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prensado',
  templateUrl: './prensado.component.html',
  styleUrls: ['./prensado.component.css']
})
export class PrensadoComponent implements OnInit {
  inflacionmensual: string | undefined;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/inflacionmensual';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.inflacionmensual = data;
      },
      (error) => {
        console.log('Error al obtener la ultima inflacion mensual:', error);
      }
    );
  }


}