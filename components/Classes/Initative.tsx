
export class Initative{

initList?:string[][];

addInit(name:string, roll:number){
this.initList?.push([roll.toString(), name])

}

sortInit(){
    this.initList?.sort()
}


    
}