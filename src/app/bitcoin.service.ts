// bitcoin.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  getBitcoinPrice() {
    return axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then(response => response.data.bitcoin.usd);
  }
}
