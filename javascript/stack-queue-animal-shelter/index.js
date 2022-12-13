'use strict';

class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Animal {
  constructor(name, age, story) {
    this.name = name;
    this.age = age;
    this.story = story;
  }
}

class Dog extends Animal {
  constructor(name, age, story) {
    super(name, age, story);
    this.type = 'dog';
  }
}

class Cat extends Animal {
  constructor(name, age, story) {
    super(name, age, story);
    this.type = 'cat';
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return !this.front;
  }

  peek() {
    if(!this.front) {
      return 'Shelter is empty...';
    }
    return this.front.val;
  }

  enqueue(val) {
    if(!(val instanceof Dog || val instanceof Cat)) {
      throw 'ERROR: Invalid input - must be Dog or Cat';
    }
    let back = new Node(val);
    if(!this.front) {
      this.front = back;
      this.back = back;
      return;
    }
    this.back.next = back;
    this.back = this.back.next;
  }

  dequeue(type = null) {
    if(!this.front) {
      throw 'ERROR: Shelter is currently empty';
    }
    if(!type) {
      let front = this.front;
      this.front = this.front.next;
      front.next = null;
      return front.val;
    }
    let curr = this.front;
    if(!curr.next) {
      if(curr.val.type !== type) {
        return `Sorry, we currently have no ${type}s`;
      }
      return this.dequeue();
    }
    // let curr = this.front.next;
    // let prev = this.front;
    while(curr.next) {
      if(curr.next.val.type === type) {
        const dequeued = curr.next.val;
        curr.next = curr.next.next;
        curr.next.next = null;
        return dequeued;
      }
      curr = curr.next;
    }
    return `Sorry, we currently have no ${type}s`;
  }
}

// let shelter = new AnimalShelter();

// let dog1 = new Dog('spot', '3 years', 'a good boi');
// let cat1 = new Cat('grumpy', '2 years', 'a grumpy kitty');
// let dog2 = new Dog('clifford', '5 years', 'big and red and dog');

// shelter.enqueue(dog1);
// shelter.enqueue(cat1);
// shelter.enqueue(dog2);

// let popped = shelter.dequeue('cat');
// console.log("🚀 ~ file: index.js:100 ~ popped", popped);
// let popped2 = shelter.dequeue();
// console.log("🚀 ~ file: index.js:102 ~ popped2", popped2);

module.exports = { Node, AnimalShelter, Dog, Cat };
