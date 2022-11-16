const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно содержать не больше 10 и не меньше 2 символов.');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Такого типа персонажа не существует.');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж погиб!');
    }
  }
}
