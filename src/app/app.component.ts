import { Component } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-weatherApi';

  constructor(private weatherservice: WeatherService){  }

  ngOnInit(){
    // this.weatherservice.getWeather()
    //     .pipe()
    //     .subscribe()
  }

}
