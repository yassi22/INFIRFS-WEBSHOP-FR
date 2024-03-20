import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
 
 


@Injectable({
  providedIn: 'root'
}) 

export class LanguageService { 

   public language: string = "NL";   
 
  constructor(){
    
  } 

  public setLanguage(languageToSet:string){ 
     this.language = languageToSet; 
  } 



    
}
