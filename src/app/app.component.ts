import { Component } from '@angular/core';
import {DataService} from '../services/DataService';
import {SampleData} from '../services/SampleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  dataToShow = 'placeholder';
  constructor(private dataService: DataService) {
     dataService.getData().subscribe((data: SampleData) => {
       return this.dataToShow = data.SampleData;
     });
  }
}
