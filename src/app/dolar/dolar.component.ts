import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {
  oficial: number | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://price-webscraper.onrender.com/dolaroficial').subscribe(
      (data) => {
        this.oficial = data.oficial;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}
