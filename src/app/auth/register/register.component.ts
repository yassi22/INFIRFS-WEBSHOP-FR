import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; 
import { TokenService } from '../token.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup; 



  constructor(private fb: FormBuilder, private authService: AuthService, private tokenService: TokenService, private router: Router) {

  }


  ngOnInit(): void {

    this.registerForm = this.fb.group({
      email: ['', [Validators.email, Validators.required, Validators.maxLength(64), Validators.minLength(5)]],
      password: ['', [Validators.minLength(8), Validators.maxLength(128)]],
      repeated_password: [''], 
      voornaam: [''], 
      tussenvoegsel: [''], 
      achternaam: [''],
      straat: [''],
      huisnummer: [0],
      postcode: [''],

    });
  }

  public onSubmit(): void {
    this.authService.register(this.registerForm.value).subscribe((authResponse: { "token": string }) => {
      console.log(authResponse.token, 'User registered');
      this.tokenService.storeToken(authResponse.token);  

      this.router.navigate([""])

    })
  }
}
