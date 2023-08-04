import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-minimosube',
  templateUrl: './minimosube.component.html',
  styleUrls: ['./minimosube.component.css']
})
export class MinimosubeComponent implements OnInit {
  minimosube: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/minimosube').subscribe(
      (data) => {
        this.minimosube = data.minimosube;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}