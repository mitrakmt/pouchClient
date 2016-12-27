import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class LandingService {

  constructor(public http: Http) { }

  signup(firstName, lastName, email, password, frequency, imageUrl, category): Observable<any> {
    console.log("Inside signup")
    let body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      frequency: frequency,
      profileImageUrl: imageUrl,
      categorySelected: category
    }
    return this.http.post('/api/users', body)
      .map(Response => {
        console.log(Response)
        return Response
      })
  }

  login(email, password): Observable<any> {
    console.log("Inside login")
    let body = {
      email: email,
      password: password
    }

    return this.http.post('/api/users/login', body)
      .map(Response => {
        console.log(Response)
        return Response
      })
  }

}
