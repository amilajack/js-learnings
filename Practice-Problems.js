// 1.
// given a list of words and a list of words to remove from the list,
// remove all the words from the list. Do this without creating a new array.

// hint: you can use the Array splice method

const list = ['ZERO', 2, 'THREE', 4, 'FIVE', 6];
let wordsToRemove = ['ZERO', 'THREE' , 'FIVE'];

//Method 1:
function removeFromList(list, wordsToRemove) {
    for (let i = 0 ; i < list.length ; i++) {
        for(let j = 0 ; j < wordsToRemove.length ; j++) {
            if (list[i] === wordsToRemove[j]) {
                list.splice(i, 1);
            } 
            console.log(list);
        } 
    }
}



removeFromList(list, wordsToRemove);

//2.Write a class that has the methods setName and getName. The class should have a name property
// and 'setName' should update the name class property with a given name and 'getName' 
// should return the class property 'name'.

class Cats {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.name = value;
        
    }
}

const cheshire = new Cats('Cheshire');

// 3. create an object that has the following properties: a: 12, b: 'foo', and c: false

const obj = {
    a: 12,
    b: 'foo',
    c: false
}

// 4. write an arrow function that takes two numbers, adds them, and returns the result

const addSum = (number1, number2) => {
    const sum = number1 + number2);
    console.log(sum)
}

/*
5.
A naive way of implementing a sequencer is by using an array
to store the sounds that happen at a certain time. For example,
all the sounds that should be played at time i will be stored in
the ith index

Lets assume that we have a play method that, when passed a sound,
we can play it. You don't need to care about how it is implemented

Also you don't need to worry how the Sound class is implemented.
*/
class Sound {
      constructor(midi) {
        this.midi = midi;
      }
    }
    
    class Sequencer {
      constructor() {
        this.sequence = [];
      }
      
        //The `sound` paramater is an instance of `Sound` class
      
      addSound(time, sound) {
        this.time = time;
        this.sound = sound;
    }
    
      //The `sound` paramater is an instance of `Sound` class
    
      removeSound(time, sound) {
        this.time = time;
        this.sound = sound;

    }
    
      playAllSoundsAtTimeI(i) {
        this.i = i;
      }
    
      //The `sound` paramater is an instance of `Sound` class
      //Pretend this method is impelmented for you

      play(sound) {}
        this.sound = sound;
}
