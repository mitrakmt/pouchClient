import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service'
import { User } from './user'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private user:User;
  private loginUser = {
    email: '',
    password: ''
  }

  private _loginEmail: string = ''
  private _loginPassword: string = ''

  constructor(private _landingService: LandingService) { }

  signup() {
    let firstName = this.user.firstName
    let lastName = this.user.lastName
    let email = this.user.email
    let password = this.user.password
    let frequency = this.user.frequency
    let imageUrl = this.user.imageUrl
    let category = this.user.category

    this._landingService.signup(firstName, lastName, email, password, frequency, imageUrl, category)
      .subscribe(
        response => {
          console.log("Response from signup ", response)
        }
      )
  }

  login() {
    let email = this._loginEmail
    let password = this._loginPassword

    this._landingService.login(email, password)
      .subscribe(
        response => {
          console.log("Response from login ", response)
        }
      )
  }

  ngOnInit() {
    
  }

}
