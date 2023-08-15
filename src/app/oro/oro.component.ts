import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-oro',
  templateUrl: './oro.component.html',
  styleUrls: ['./oro.component.css']
})
export class OroComponent implements OnInit {
  gold: string | undefined;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const url = 'https://price-webscraper.onrender.com/oro';
    this.apiService.getData(url).subscribe(
      (data) => {
        this.gold = data;
      },
      (error) => {
        console.log('Error al obtener el precio del oro:', error);
      }
    );
  }


}