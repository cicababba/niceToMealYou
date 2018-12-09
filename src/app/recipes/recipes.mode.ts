export class Recipe {
    public idMeal: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public createdAt: Date;

    constructor(id: number, n: string, d: string, iP: string, cA = new Date) {
        this.idMeal = id;
        this.name = n;
        this.description = d;
        this.imagePath = iP;
        this.createdAt = cA;
    }
}