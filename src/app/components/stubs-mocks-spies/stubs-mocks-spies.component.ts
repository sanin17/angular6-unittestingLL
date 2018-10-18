import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/DataService';
import {SampleData} from '../../../services/SampleData';

@Component({
  selector: 'app-stubs-mocks-spies',
  templateUrl: './stubs-mocks-spies.component.html',
  styleUrls: ['./stubs-mocks-spies.component.css']
})
export class StubsMocksSpiesComponent implements OnInit {
  internalString = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: SampleData) => {
      return this.internalString = data.SampleData;
    });
  }

}
