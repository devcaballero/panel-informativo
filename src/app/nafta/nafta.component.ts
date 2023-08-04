import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nafta',
  templateUrl: './nafta.component.html',
  styleUrls: ['./nafta.component.css']
})
export class NaftaComponent implements OnInit {
  nafta: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/nafta').subscribe(
      (data) => {
        this.nafta = data.nafta;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}
