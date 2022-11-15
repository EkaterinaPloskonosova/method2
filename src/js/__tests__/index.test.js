import Character from '../character.js';
import Bowman from '../bowman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('checking for class output without errors', () => {
  const result = new Character('bowman1', 'Bowman');
  const expected = {
    name: 'bowman1', type: 'Bowman', health: 100, level: 1,
  };
  expect(result).toEqual(expected);
});

test('check, error by class type', () => {
  expect(() => {
    const character1 = new Character('bowman1', 'tramp');
  }).toThrow(Error);
});

test('check, error by class name', () => {
  expect(() => {
    const character2 = new Character('B', 'Swordsman');
  }).toThrow(Error);
});

test('checking class output Bowman', () => {
  const result = new Bowman('bowman1', 'Bowman');
  const expected = {
    name: 'bowman1', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(result).toEqual(expected);
});

test('checking class output Swordsman', () => {
  const result = new Swordsman('swordsman1', 'Swordsman');
  const expected = {
    name: 'swordsman1', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(result).toEqual(expected);
});

test('checking class output Magician', () => {
  const result = new Magician('magician1', 'Magician');
  const expected = {
    name: 'magician1', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(result).toEqual(expected);
});

test('checking class output Daemon', () => {
  const result = new Daemon('daemon1', 'Daemon');
  const expected = {
    name: 'daemon1', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(result).toEqual(expected);
});

test('checking class output Undead', () => {
  const result = new Undead('undead1', 'Undead');
  const expected = {
    name: 'undead1', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(result).toEqual(expected);
});

test('checking class output Zombie', () => {
  const result = new Zombie('zombie1', 'Zombie');
  const expected = {
    name: 'zombie1', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(result).toEqual(expected);
});
