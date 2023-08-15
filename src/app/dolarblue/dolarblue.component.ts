import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dolarblue',
  templateUrl: './dolarblue.component.html',
  styleUrls: ['./dolarblue.component.css']
})
export class DolarblueComponent implements OnInit {
  blue: number | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://price-webscraper.onrender.com/dolaroficial').subscribe(
      (data) => {
        this.blue = data.oficial;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}


