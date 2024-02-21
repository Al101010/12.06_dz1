import Character from '../myFunction';

test('should myFunction: Bowman', () => {
    const bowmanOleg = {name: 'Oleg', health: 100, level: 1, type: 'Bowman', attack: 25, defence: 25};
    const result = new Character('Oleg', 'Bowman');
    expect(result).toEqual(bowmanOleg);
  });

test('should myFunction: !Bowman', () => {
    const errorName = new Character('', 'Bowman');
    const result = new Character('Oleggggggggggggggg', 'Bowman');
    expect(result).toEqual(errorName);
  });


test('should myFunction: Swordsman', () => {
    const swordsmanOleg = {name: 'Oleg', health: 100, level: 1, type: 'Swordsman', attack: 40, defence: 10};
    const result = new Character('Oleg', 'Swordsman');
    expect(result).toEqual(swordsmanOleg);
  });

test('should myFunction: !Swordsman', () => {
    const errorName = new Character('', 'Swordsman');
    const result = new Character('Oleggggggggggggggg', 'Swordsman');
    expect(result).toEqual(errorName);
  });


test('should myFunction: Magician', () => {
    const magicianOleg = {name: 'Oleg', health: 100, level: 1, type: 'Magician', attack: 10, defence: 40};
    const result = new Character('Oleg', 'Magician');
    expect(result).toEqual(magicianOleg);
  });

test('should myFunction: !Magician', () => {
    const errorName = new Character('', 'Magician');
    const result = new Character('Oleggggggggggggggg', 'Magician');
    expect(result).toEqual(errorName);
  });


  test('should myFunction: Undead', () => {
    const undeadOleg = {name: 'Oleg', health: 100, level: 1, type: 'Undead', attack: 25, defence: 25};
    const result = new Character('Oleg', 'Undead');
    expect(result).toEqual(undeadOleg);
  });

test('should myFunction: !Undead', () => {
    const errorName = new Character('', 'Undead');
    const result = new Character('Oleggggggggggggggg', 'Undead');
    expect(result).toEqual(errorName);
  });


  test('should myFunction: Zombie', () => {
    const zombieOleg = {name: 'Oleg', health: 100, level: 1, type: 'Zombie', attack: 40, defence: 10};
    const result = new Character('Oleg', 'Zombie');
    expect(result).toEqual(zombieOleg);
  });

test('should myFunction: !Zombie', () => {
    const errorName = new Character('', 'Zombie');
    const result = new Character('Oleggggggggggggggg', 'Zombie');
    expect(result).toEqual(errorName);
  });


test('should myFunction: Daemon', () => {
    const daemonOleg = {name: 'Oleg', health: 100, level: 1, type: 'Daemon', attack: 10, defence: 40};
    const result = new Character('Oleg', 'Daemon');
    expect(result).toEqual(daemonOleg);
  });

test('should myFunction: !Daemon', () => {
    const errorName = new Character('', 'Daemon');
    const result = new Character('Oleggggggggggggggg', 'Daemon');
    expect(result).toEqual(errorName);
  });





test('should myFunction: !Type', () => {
    const errorType = new Character('Oleg', '');
    const result = new Character('Oleg', 'Angel');
    expect(result).toEqual(errorType);
  });