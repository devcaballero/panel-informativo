import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heineken',
  templateUrl: './heineken.component.html',
  styleUrls: ['./heineken.component.css']
})
export class HeinekenComponent implements OnInit {
  heineken: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/heineken').subscribe(
      (data) => {
        this.heineken = data.heineken;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}