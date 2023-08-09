import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  visitorCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getVisitorCount();
  }

  getVisitorCount(): void {
    this.http.get<number>('http://ec2-54-157-155-172.compute-1.amazonaws.com:8080/visitors').subscribe(
      (count) => {
        this.visitorCount = count;
      },
      (error) => {
        console.log('Error al obtener el contador de visitantes.', error);
      }
    );
  }
}