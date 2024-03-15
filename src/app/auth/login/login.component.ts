import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup; 

  constructor(private formBuilder: FormBuilder, private authService: AuthService){ 
    this.loginForm = this.formBuilder.group({
        email: [''],
        password: ['']

    })
  }

public onSubmit(){   
  console.log("test")
  this.authService.login(this.loginForm.value).subscribe((loginResponse: {"email" : string, "token": string}) => {
    console.log("LoginResponse", loginResponse); 
    localStorage.setItem('auth_token', loginResponse.token)
  });
  
}


}
