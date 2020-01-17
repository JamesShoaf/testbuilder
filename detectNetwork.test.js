var FILL_ME_IN = 'Fill this value in';
var should = chai.should();

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
// Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
  // throw new Error('Delete me!');

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011123456789012').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011123456789012345').should.equal('Discover');
  });
  var tailNumbers = '1234567890123456'
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + tailNumbers.slice(0, 13)).should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + tailNumbers).should.equal('Discover');
      });
    })(prefix)
  }
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6541234567890123').should.equal('Discover')
  });it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6541234567890123456').should.equal('Discover')
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var prefixes = ['5018', '5020', '5038', '6304'];
  //for each prefix
  var tailNumbers = '123456789012345';
  for (i = 0; i < prefixes.length; i++){
    //for each card length
    for (var j = 12; j < 20; j++){
      (function (j) {
        //generate a card from prefix and tail
        var currentCard = prefixes[i] + tailNumbers.slice(0, j-4);
        it('has a prefix of ' + prefixes[i] + ' and a length of ' + j, function(){
          detectNetwork(currentCard).should.equal('Maestro')
        });
      })(j)
    }
  }
});


describe('China UnionPay', function(){
  var prefixes = [[622126, 622925], [624, 626], [6282, 6288]];
  //generates a card string from 2 ints
  function generateCard(prefix, length){
    var cardString = prefix.toString();
    while (cardString.length < length){
      cardString += '0';
    }
    return cardString;
  }
  //for each start/end number in prefixes array
  for (i = 0; i < prefixes.length; i++){
    //for each prefix from start to end
    for (j = prefixes[i][0]; j < prefixes[i][1] + 1; j++){
      //for each card length
      for (var k = 16; k < 20; k++){
        (function (k) {
          var currentCard = generateCard(j, k);
          it('has a prefix of ' + j + ' and a length of ' + k, function(){
            detectNetwork(currentCard).should.equal('China UnionPay')
          });
        })(k)
      }
    }
  }

});

describe('Switch', function(){
  var prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var lengths = [16, 18, 19];
  function generateCard(prefix, length){
    var cardString = prefix.toString();
    while (cardString.length < length){
      cardString += '0';
    }
    return cardString;
  }

  for (i = 0; i < prefixes.length; i++){
    for (var j = 0; j < lengths.length; j++){
      (function(j){
        var currentCard = generateCard(prefixes[i], lengths[j]);
        it(currentCard + ' has a prefix of ' + prefixes[i].toString() + ' and a length of ' + lengths[j].toString(), function(){
          detectNetwork(currentCard).should.equal('Switch')
        });
      })(j)
    }
  }
});