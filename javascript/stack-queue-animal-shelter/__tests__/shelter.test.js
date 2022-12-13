'use strict';

// Require our linked list implementation
const { AnimalShelter, Dog, Cat } = require('../');

const emptyShelter = new AnimalShelter();
let shelter = new AnimalShelter();

let dog1 = new Dog('spot', '3 years', 'a good boi');
let cat1 = new Cat('grumpy', '2 years', 'a grumpy kitty');
let dog2 = new Dog('clifford', '5 years', 'big and red and dog');

shelter.enqueue(dog1);
shelter.enqueue(cat1);
shelter.enqueue(dog2);

describe('Queue', () => {

  test('handles isEmpty check', () => {
    expect(shelter.isEmpty()).toEqual(false);
    expect(emptyShelter.isEmpty()).toEqual(true);
  });

  test('handles peek', () => {
    let val = shelter.peek();
    expect(val).toEqual(dog1);
  });

  test('handles dequeue from empty queue', () => {
    expect(() => emptyShelter.dequeue()).toThrow('ERROR: Shelter is currently empty');
  });

  test('handles dequeue with specified argument', () => {
    const animal = shelter.dequeue('cat');
    expect(animal).toEqual(cat1);
  });

  test('handles dequeue with no argument', () => {
    const animal = shelter.dequeue();
    expect(animal).toEqual(dog1);
  });

  test('handles enqueue onto empty queue', () => {
    let newDog = new Dog('Rudolph', '6 months', 'kinda looks like a reindeer...');
    emptyShelter.enqueue(newDog);
    expect(emptyShelter.back.val).toEqual(newDog);
    expect(emptyShelter.front.val).toEqual(newDog);
  });

  test('handles push onto non-empty queue', () => {
    let newDog = new Dog('Rudolph', '6 months', 'kinda looks like a reindeer...');
    shelter.enqueue(newDog);
    expect(shelter.back.val).toEqual(newDog);
  });

});
