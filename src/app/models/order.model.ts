export class Order {
    public game_ids: number[]; 
    public user_email: string;
  

    constructor(game_ids : number[], user_email: string){ 
        this.game_ids = game_ids; 
        this.user_email = user_email;  
        
    }

  }
  