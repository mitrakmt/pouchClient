import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class LandingService {

  constructor(public http: Http) { }

  signup(firstName, lastName, email, password): Observable<any> {
    let body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    return this.http.post('/api/users/signup', body)
      .map(Response => {
        console.log(Response)
        return Response
      })
  }

}
