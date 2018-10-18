import {TestBed, async, inject, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DataService} from '../services/DataService';
import {Data} from '@angular/router';
import {of} from 'rxjs';


describe('Mock Http', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [DataService],
      imports: [HttpClientTestingModule]
    }).compileComponents();

  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should mock http request for Data Service',
    inject([HttpTestingController, DataService],
      (httpMock: HttpTestingController, service: DataService) => {
        service.getData().subscribe(data => {
          expect(data).toBe('intercepted');
        });

        const req = httpMock.expectOne('assets/sampleData.json');
        req.flush('intercepted');
      }));

  it('should mock http request and render element correctly',
    inject([HttpTestingController],
      (httpMock: HttpTestingController) => {
        fixture = TestBed.createComponent(AppComponent);
        const req = httpMock.expectOne('assets/sampleData.json');
        req.flush({'SampleData': 'intercepted'});
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('intercepted');
      }));

});



