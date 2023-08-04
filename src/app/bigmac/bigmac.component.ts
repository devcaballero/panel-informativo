import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bigmac',
  templateUrl: './bigmac.component.html',
  styleUrls: ['./bigmac.component.css']
})
export class BigmacComponent implements OnInit {
  bigmac: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/bigmac').subscribe(
      (data) => {
        this.bigmac = data.bigmac;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}