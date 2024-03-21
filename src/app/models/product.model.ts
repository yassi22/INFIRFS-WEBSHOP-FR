// import { Category } from "./category.model";

export class Product {
  public id: number;
  public title: string;
  public imageurl: string;
  public description: string; 
  public developer :string; 
  public publisher: string; 
  public genre: number[]; 
  public language: string[];  
  public releaseDate : string; 
  public os: string; 
  public processor: string; 
  public memory: string; 
  public graphics: string; 
  public sound_card: string; 

  public price: number;
  // public category: Category;
} 


