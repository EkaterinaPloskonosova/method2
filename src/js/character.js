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
}
