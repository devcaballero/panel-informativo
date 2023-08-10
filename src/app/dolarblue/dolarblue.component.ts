import { Component, OnInit } from '@angular/core';
import { DolarBlueService } from '../dolar-blue.service';

@Component({
  selector: 'app-dolarblue',
  templateUrl: './dolarblue.component.html',
  styleUrls: ['./dolarblue.component.css']
})
export class DolarblueComponent implements OnInit {
  blue: number | undefined;

  constructor(private dolarBlueService: DolarBlueService) { }

  ngOnInit(): void {
    this.dolarBlueService.getDolarBlueValue().then((blueValue: any) => {
      this.blue = blueValue;
    });
  }
}



