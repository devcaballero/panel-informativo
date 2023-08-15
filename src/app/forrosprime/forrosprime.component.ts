import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forrosprime',
  templateUrl: './forrosprime.component.html',
  styleUrls: ['./forrosprime.component.css']
})
export class ForrosprimeComponent implements OnInit {
  forros: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://price-webscraper.onrender.com/forrosprime').subscribe(
      (data) => {
        this.forros = data.forros;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}