import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-merca',
  templateUrl: './merca.component.html',
  styleUrls: ['./merca.component.css']
})
export class MercaComponent implements OnInit {
  fernet: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/fernet';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.fernet = data;
      },
      (error) => {
        console.log('Error al obtener el precio del fernet:', error);
      }
    );
  }
}