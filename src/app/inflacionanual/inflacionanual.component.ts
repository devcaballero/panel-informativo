import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inflacionanual',
  templateUrl: './inflacionanual.component.html',
  styleUrls: ['./inflacionanual.component.css']
})
export class InflacionanualComponent implements OnInit {
  inflacionanualizada: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/inflacionanualizada').subscribe(
      (data) => {
        this.inflacionanualizada = data.inflacionanual;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}