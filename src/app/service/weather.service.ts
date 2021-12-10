import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather?';
  apikey = '7c3e69628d89d3db01979728551dc676';
  constructor(private http: HttpClient) { }

  getWeather(lat: string, lon: string){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'metric')
    .set('appid', this.apikey)
    return this.http.get(this.url, {params});
    //return this.http.get<any>(env.config.feedRoot + 'Paris')
  }

  getWeatherByCityName(city: string){
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', this.apikey)

    return this.http.get(this.url, {params});
  }

  
}
