import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forrosprime',
  templateUrl: './forrosprime.component.html',
  styleUrls: ['./forrosprime.component.css']
})
export class ForrosprimeComponent implements OnInit {
  forros: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/forrosprime';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.forros = data;
      },
      (error) => {
        console.log('Error al obtener el precio de prime:', error);
      }
    );
  }
  
}