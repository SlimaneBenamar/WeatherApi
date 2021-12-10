import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weatherData.model';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  title = 'Weather APP';
  cityName!: string;
  showCurrent: boolean = false;
  weatherDetails: WeatherData = new WeatherData();
  lat!: any;
  lon!: any;
  weather!: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    //this.weatherService.getWeather(35, 139).subscribe(console.log)
    this.getLocation();
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeather(this.lat, this.lon).subscribe(data=>{
          this.weather = data;
        })
      })
    }
  }

  getCity(city: string){
    this.weatherService.getWeatherByCityName(city).subscribe(data=>{
      this.weather = data;
    })
  }
}
