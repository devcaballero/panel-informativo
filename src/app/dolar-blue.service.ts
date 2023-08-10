import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DolarBlueService {
  
  constructor() { }


    getDolarBlueValue(): Promise<number> {
      const apiUrl = 'http://ec2-54-157-155-172.compute-1.amazonaws.com:8080/dolar';

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