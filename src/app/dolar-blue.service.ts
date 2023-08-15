import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DolarBlueService {
  
  constructor() { }


getDolarBlueValue(): Promise<number> {
  const apiUrl = 'https://price-webscraper.onrender.com/dolaroficial';

  return axios.get(apiUrl)
    .then(response => {
      // La respuesta de la API contiene el objeto con el valor "blue"
      return response.data.blue;
    })
    .catch(error => {
      console.error('Error al obtener el valor blue:', error);
      throw error; // Puedes propagar el error si lo deseas
    });
}

}