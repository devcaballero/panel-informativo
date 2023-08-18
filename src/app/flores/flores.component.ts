import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent implements OnInit {
  johnnyred: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/johnnyred';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.johnnyred = data.replace(",", "");
      },
      (error) => {
        console.log('Error al obtener el precio de johnny red 750ml:', error);
      }
    );
  }
  
}