import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-minimosube',
  templateUrl: './minimosube.component.html',
  styleUrls: ['./minimosube.component.css']
})
export class MinimosubeComponent implements OnInit {
  minimosube: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/minimosube';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.minimosube = data;
      },
      (error) => {
        console.log('Error al obtener el valor de la sube:', error);
      }
    );
  }



}