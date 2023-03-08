export interface HeroBase {
    id: string;
    name: string;
    description: string;
    image: string;
    tags: string[];
    abilities: Ability[];
}

export interface Ability {
    //TODO
}
