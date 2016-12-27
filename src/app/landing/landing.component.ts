import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private _signupPassword: string = ''
  private _signupEmail: string = ''
  private _signupFirstName: string = ''
  private _signupLastName: string = ''

  private _loginEmail: string = ''
  private _loginPassword: string = ''

  constructor(private _landingService: LandingService) { }

  signup() {
    let firstName = this._signupFirstName
    let lastName = this._signupLastName
    let email = this._signupEmail
    let password = this._signupPassword

    this._landingService.signup(firstName, lastName, email, password)
      .subscribe(
        response => {
          console.log("Response from signup ", response)
        }
      )
  }

  ngOnInit() {
    
  }

}
