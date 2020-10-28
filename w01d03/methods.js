const goodDog = {
  worms: true,
  breed: 'small',
  fluff: false,
  age: 7,
  goodBoiNess: 4,
  trained: true,
  protec: false,
  infoAboutMe: function() {
    console.log(`Hello, my age is ${this.age} and I have worms? ${this.worms}. And my breed is ${this.breed}.`);
  },
  dewormDoggo: function() {
    this.worms = false;
    console.log('dewormed!!!');
  }
};

const goodWormyDog = goodDog;

// console.log(dog.infoAboutMe.toString());
goodWormyDog.infoAboutMe();
// goodWormyDog.dewormDoggo();
goodWormyDog.infoAboutMe();

const infoAboutDog = function(dog) {
  console.log(`Hello, my age is ${dog.age} and I have worms? ${dog.worms}. And my breed is ${dog.breed}.`);
};

// infoAboutDog(dog);
