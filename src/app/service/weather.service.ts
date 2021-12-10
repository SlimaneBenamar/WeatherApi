import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(lat: string, lon: string){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'metric')
    .set('appid', env.config.token)
    return this.http.get(env.config.feedRoot, {params});
    //return this.http.get<any>(env.config.feedRoot + 'Paris')
  }

  getWeatherByCityName(city: string){
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', env.config.token)

    return this.http.get(env.config.feedRoot, {params});
  }

  
}
