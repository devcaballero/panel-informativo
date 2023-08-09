import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { Observable, map } from 'rxjs';
import { WeatherData } from './temperature/temperature.data.interface';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  private getTimelineURL = "https://api.tomorrow.io/v4/timelines";
  private apikey = "gteJfd5gUxIr6vDZNQMsTSkW5YI3wUJF";
  private location = [40.758, -73.9855];
  private fields = [
    "precipitationIntensity",
    "precipitationType",
    "windSpeed",
    "windGust",
    "windDirection",
    "temperature",
    "temperatureApparent",
    "cloudCover",
    "cloudBase",
    "cloudCeiling",
    "weatherCode",
  ];
  private units = "metric";
  private timesteps = ["current", "1h", "1d"];
  private timezone = "America/Argentina/Buenos_Aires";

  constructor(private http: HttpClient) { }

  getTimeline(): Observable<number> {
    const now = moment.utc();
    const startTime = moment.utc(now).add(0, "minutes").toISOString();
    const endTime = moment.utc(now).add(1, "days").toISOString();

    let params = new HttpParams()
      .set('apikey', this.apikey)
      .set('location', this.location.join(','))
      .set('fields', this.fields.join(','))
      .set('units', this.units)
      .set('timesteps', this.timesteps.join(','))
      .set('startTime', startTime)
      .set('endTime', endTime)
      .set('timezone', this.timezone);

    const url = this.getTimelineURL + "?" + params;
   
    return this.http.get<WeatherData>(url, { params: params }).pipe(
      map((response: WeatherData) => {
        // Assuming the first object is the current data
        return response.data.timelines[0].intervals[0].values.temperature;
      })
    );

  }
}