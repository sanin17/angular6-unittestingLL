import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StubsMocksSpiesComponent } from './stubs-mocks-spies.component';
import {DataService} from '../../../services/DataService';

import {of} from 'rxjs';
import * as sinon from 'sinon';


describe('StubsMocksSpiesComponent', () => {

  it('should test data service stub', () => {
    // arrange
    let dataService: DataService;
    dataService = new DataService(undefined);
    const sut = new StubsMocksSpiesComponent(dataService);

    const data = { 'SampleData' : 'Stub'};
    dataService.getData = () => of(data);

    // act
    sut.ngOnInit();

    // assert
    expect(sut.internalString).toEqual('Stub');

  });

  it('should test data service spy', () => {
    // arrange
    let dataService: DataService;
    dataService = new DataService(undefined);
    const sut = new StubsMocksSpiesComponent(dataService);
    const spy = spyOn(dataService, 'getData').and.returnValue({ subscribe: () => {}});

    // act
    sut.ngOnInit();

    // assert
    expect(spy).toHaveBeenCalled();
  });

  it('should test data service mock', () => {
    // arrange
    let dataService: DataService;
    dataService = new DataService(undefined);
    const sut = new StubsMocksSpiesComponent(dataService);
    const mock = sinon.mock(dataService);

    mock.expects('getData').once().returns({subscribe: () => {}});

    // act
    sut.ngOnInit();

    // assert
    mock.verify();
  });


});
