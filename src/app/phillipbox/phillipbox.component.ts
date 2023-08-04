import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phillipbox',
  templateUrl: './phillipbox.component.html',
  styleUrls: ['./phillipbox.component.css']
})
export class PhillipboxComponent implements OnInit {
  phillipbox: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/phillipbox').subscribe(
      (data) => {
        this.phillipbox = data.phillipbox;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}