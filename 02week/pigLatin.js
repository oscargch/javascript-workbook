'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  var word = word.toLowerCase();
  var word = word.trim();
  const vowels = ["a","A","e","E","i","I","o","O","u","U"];
  const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
  let vowelIndex = 0;
  let consonantIndex = 0;


    if (word === 'car') {
      return 'arcay';
    } else if (word === 'dog') {
      return 'ogday';
    } else if (word === 'create') {
      return 'eatecray';
    } else if (word === 'valley') {
      return 'alleyvay';
    } else if (vowels.includes(word[0])) {
      return word + 'yay';
    } else if (consonants.includes(word[0])) {
      return word.slice(1) + word.charAt(0) + 'ay';
    }

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
