export interface IItemBase {
    id: string;
    color: string;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
    isRecipe: boolean;
    madeIn:string[]|null;
}