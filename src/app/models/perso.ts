export class Perso {
    constructor(
    public name: string,
    public life: number,
    public intelligence: number,
    public strength: number,
    public speed: number,
    public durability: number,
    public power: number,
    public combat: number,
    public imgUrl: string
    ) {}

    isAlive() {
        return this.life > 0;
      }

    punch() {
        console.log(`${this.name} donne un Punch !`);
    }

    randomPunch() {
       return Math.floor(Math.random() * this.power / 10);
    }

    damage(enemy: Perso) {
        enemy.life -= 10 + this.randomPunch();
    }

    showLife() {
        console.log(`${this.name} à ${this.life} de points de vie`);
    }
}
