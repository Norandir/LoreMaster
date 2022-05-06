export class Item {
    Name?: string
    Type?: string
    Cost?: string
    Weight?: string
    Description?: string
}

export class Weapon extends Item{

    Damage?: string
    Properties?: string
}