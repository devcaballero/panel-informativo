import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-oro',
  templateUrl: './oro.component.html',
  styleUrls: ['./oro.component.css']
})
export class OroComponent implements OnInit {
  gold: string | undefined;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://price-webscraper.onrender.com/oro').subscribe(
      (data) => {
        this.gold = data.gold;
      },
      (error) => {
        console.log('Error al obtener la temperatura.', error);
      }
    );
  }
}