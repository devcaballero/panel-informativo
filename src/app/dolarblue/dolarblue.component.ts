import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dolarblue',
  templateUrl: './dolarblue.component.html',
  styleUrls: ['./dolarblue.component.css']
})
export class DolarblueComponent implements OnInit {
  blue: string | undefined;
  isLoading: boolean = true;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/api/v1/dolar-blue';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.blue = data;
        this.isLoading = false; 
      },
      (error) => {
        console.log('Error al obtener la cotizacion del dolar blue:', error);
        this.isLoading = false; 
      }
    );
  }

}
