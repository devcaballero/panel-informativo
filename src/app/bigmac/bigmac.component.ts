import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bigmac',
  templateUrl: './bigmac.component.html',
  styleUrls: ['./bigmac.component.css']
})

export class BigmacComponent implements OnInit {
  bigmac: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/bigmac';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.bigmac = data;
      },
      (error) => {
        console.log('Error al obtener el precio del bigmac:', error);
      }
    );
  }

}
