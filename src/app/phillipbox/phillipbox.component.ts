import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-phillipbox',
  templateUrl: './phillipbox.component.html',
  styleUrls: ['./phillipbox.component.css']
})
export class PhillipboxComponent implements OnInit {
  phillipbox: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/phillipbox';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.phillipbox = data;
      },
      (error) => {
        console.log('Error al obtener el precio del oro:', error);
      }
    );
  }


}