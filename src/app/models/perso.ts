export class Perso {
    constructor(
    public name: string,
    public life: number,
    public speed: number,
    public power: number,
    public accuracy: number,
    public imgUrl: string
    ) {}

    isAlive() {
        return this.life > 0;
      }

    punch() {
        console.log(`${this.name} donne un Punch !`);
    }

    damage(enemy: Perso) {
        enemy.life -= 10 + Math.floor(this.power * 0.1);
    }

    showLife() {
        console.log(`${this.name} à ${this.life} de points de vie`);
    }
}
