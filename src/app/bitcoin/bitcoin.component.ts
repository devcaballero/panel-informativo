// bitcoin.component.ts

import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  bitcoinPrice: number | undefined;

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinService.getBitcoinPrice().then(price => {
      this.bitcoinPrice = price;
    });
  }
}
