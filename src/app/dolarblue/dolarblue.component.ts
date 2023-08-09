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
    this.http.get<any>('http://ec2-54-157-155-172.compute-1.amazonaws.com:8080/dolar').subscribe(
      (data) => {
        this.blue = data.blue;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}
