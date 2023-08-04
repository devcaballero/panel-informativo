import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocacola',
  templateUrl: './cocacola.component.html',
  styleUrls: ['./cocacola.component.css']
})
export class CocacolaComponent implements OnInit {
  cocacola: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/cocacola').subscribe(
      (data) => {
        this.cocacola = data.cocacola;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}