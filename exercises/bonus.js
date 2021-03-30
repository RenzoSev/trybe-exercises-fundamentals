const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = {
    mage,
    warrior,
    dragon
};

const damage = (max, min) => Math.random() * (max - min) + min;
const actualMana = (mana) => mana > 15 ? mana - 15 : 'Mana insuficiente';

const dragonDamage = (action) => action(dragon.strength, 15);
const warriorDamage = (action) => action(warrior.strength * warrior.weaponDmg, warrior.strength);

const mageDamage = (actionDamage, actionMana) => ({
    damage: actionDamage(mage.intelligence * 2, mage.intelligence),
    manaSpend: actionMana(mage.mana),
});
