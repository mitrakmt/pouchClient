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
  private _frequency: number = 1
  private _imageUrl: string = ''
  private _category: string = ''

  private _loginEmail: string = ''
  private _loginPassword: string = ''

  constructor(private _landingService: LandingService) { }

  signup() {
    let firstName = this._signupFirstName
    let lastName = this._signupLastName
    let email = this._signupEmail
    let password = this._signupPassword
    let frequency = this._frequency
    let imageUrl = this._imageUrl
    let category = this._category

    this._landingService.signup(firstName, lastName, email, password, frequency, imageUrl, category)
      .subscribe(
        response => {
          console.log("Response from signup ", response)
        }
      )
  }

  ngOnInit() {
    
  }

}
