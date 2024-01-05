interface ICharacter {
    name: string;
    level: number;

    introduce(phrase: string): void;

    levelUp(): void;
}

export interface ISpellCaster {
    castSpell(): void;
}

export { ICharacter }