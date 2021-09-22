import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEligibility } from './check-eligibility.model';


@Injectable( {
  providedIn: 'root'
} )
export class CourseEligibilityService {

  constructor ( public http: HttpClient ) { }



  checkEligibility ( eligibility: IEligibility ): Observable<any> {
    console.log( "eligibility", eligibility );
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    const requestBody = eligibility;
    console.log( "requestBody", requestBody );
    return this.http.post( `http://localhost:8080/v1/enrollLearner/niit`, requestBody, { 'headers': headers } );
  }
}
