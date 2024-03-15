import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  private loginUrl: string = environment.base_url + "/auth/login";

  constructor(private http:HttpClient) { }  

  public login(LoginFormData: {'email' : string, 'password' : string}): Observable<{"email" : string, "token" : string}> { 
   return this.http.post<{"email": string, "token" : string}>(this.loginUrl, LoginFormData) 
  }

}

