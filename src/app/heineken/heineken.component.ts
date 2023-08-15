import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-heineken',
  templateUrl: './heineken.component.html',
  styleUrls: ['./heineken.component.css']
})
export class HeinekenComponent implements OnInit {
  heineken: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/heineken';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.heineken = data;
      },
      (error) => {
        console.log('Error al obtener el precio de la heineken:', error);
      }
    );
  }
}