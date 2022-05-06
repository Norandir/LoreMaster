export class Dice {
    type?: number;
    diceNumber?: number;
    mod?: boolean;



    initative(dex:number):number{
        let result: number;
        result = Math.floor(Math.random() * 20) + 1;
        result = result + dex;
        return result;
    }
    
    roll(dn:number, mod:number): number{

        let diceList: number = 0;

        let result: number;

        for(let i = 0; i < dn; i++){

            result = Math.floor(Math.random() * dn) + 1 +  mod;
            diceList += result;
        }

        
      

        return diceList;
    }
}