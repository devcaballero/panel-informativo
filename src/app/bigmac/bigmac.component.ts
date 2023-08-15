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
    // Set up request options including headers
    const requestOptions = {
      headers: {
        // Specify the allowed origins separated by commas
        'Access-Control-Allow-Origin': 'http://localhost:4200, https://panel-informativo.web.app'
      }
    };

    this.http.get<any>('https://price-webscraper.onrender.com/bigmac', requestOptions).subscribe(
      (data) => {
        this.bigmac = data.bigmac;
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }
}
