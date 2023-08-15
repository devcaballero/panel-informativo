import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nafta',
  templateUrl: './nafta.component.html',
  styleUrls: ['./nafta.component.css']
})
export class NaftaComponent implements OnInit {
  nafta: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/naftasuper';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.nafta = data;
      },
      (error) => {
        console.log('Error al obtener el valor del litro de nafta super:', error);
      }
    );
  }


}
