console.log('--- CHALLENGE 1 --- ');
function createFunction() {
	function inner() {
    console.log('hello');
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


console.log('--- CHALLENGE 2 --- ');
function createFunctionPrinter(input) {
	function inner() {
    console.log(input);
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


console.log('--- CHALLENGE 3 --- ');
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer(); // 0
const jasCounter = outer(); // 0

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter();  // 1
willCounter(); // 4

function addByX(x) {
  return function(num) {
    return x + num
  }
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
console.log('addByTwo 1', addByTwo(1)); // => should return 3
console.log('addByTwo 2', addByTwo(2)); // => should return 4
console.log('addByTwo 3', addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log('addByThree 1', addByThree(1)); // => should return 4
console.log('addByThree 2', addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log('addByFour 4', addByFour(4)); // => should return 8
console.log('addByFour 5', addByFour(5)); // => should return 9


console.log('--- CHALLENGE 4 --- ');

function once(func) {
  let run = false;
  let result = null;
	return function(num) {
    if (!run) {
      result = func(num);
      run = true;
    }
    
    return result;
  }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


console.log('--- CHALLENGE 5 --- ');
function after(count, func) {
  let invocations = 0
	return function(args) {
    if (++invocations >= count) {
      func(args)
    }
  }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


console.log('--- CHALLENGE 6 --- ');
function delay(func, wait) {
  let waitOver = false;
  setTimeout(function() {
    waitOver = true
  }, wait)
  
  return function(args) {
    if (waitOver) {
      func(args)
    }
  }
}

const logWithDelay = delay(() => console.log('hi delayed from challenge 6'), 200);
logWithDelay();
setTimeout(() => {
  logWithDelay();
}, 500)


console.log('--- CHALLENGE 7 --- ');
function rollCall(names) {
  let idx = 0;
  return function() {
    if (idx === names.length) {
      console.log('Everyone accounted for');
    } else {
      console.log(names[idx])
    }
    idx++;
  }
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


console.log('--- CHALLENGE 8 --- ');
function saveOutput(func, magicWord) {
  const obj = {}
  
  return function(arg) {
    if (arg === magicWord) {
      return obj;
    }
    obj[arg] = func(arg)
    return obj[arg] 
  }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


console.log('--- CHALLENGE 9 --- ');
function cycleIterator(array) {
  let index = 0
	return function() {
    if (index === array.length) {
      index = 0
    }
    
    const result = array[index]
    index++
    return result
  }
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


console.log('--- CHALLENGE 10 --- ');
function defineFirstArg(func, arg) {
  return function(arg2) {
    return func(arg, arg2)
  }
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


console.log('--- CHALLENGE 11 --- ');
function dateStamp(func) {
  return function(args) {
    const output = {}
    const date = new Date();
    const dateStr = date.toDateString();
    output['date'] = dateStr
    output['output'] = func(args)
    return output
  }
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


console.log('--- CHALLENGE 12 --- ');
function censor() {
  const pairs = {}
	return function(str1, str2) {
    if (str1 && str2) {
      pairs[str1] = str2
    } else {
      for (const [key, value] of Object.entries(pairs)) {
        str1 = str1.replaceAll(key, value)
      }
      return str1
    }
  }
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


console.log('--- CHALLENGE 13 --- ');
function createSecretHolder(secret) { 
  return {
    getSecret: function() {
      return secret
    },
    setSecret: function(newSecret) {
      secret = newSecret
    }
  }
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()) // => returns 2


console.log('--- CHALLENGE 14 --- ');
function callTimes() {
  let count = 0;
  return function() {
    return ++count;
  }
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2


console.log('--- CHALLENGE 15 --- ');
function roulette(num) {
	let spins = 0
  return function() {
    spins += 1
    if (spins < num) {
      return 'spin';
    } else if (spins > num) {
      return 'pick a number to play again'
    } else {
      return 'win'
    }
  }
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'


console.log('--- CHALLENGE 16 --- ');
function average() {
  let length = 0;
  let sum = 0;
  return function(num) {
    if (num) {
      sum += num
    	length += 1 
    }
    return sum / length || 0;
  }
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


console.log('--- CHALLENGE 17 --- ');
function makeFuncTester(arrOfTests) {
  let count = 0
  return function(cb) {
    const arg = arrOfTests[count][0]
  	const expected = arrOfTests[count][1]
    
    const result = cb(arg) === expected
    count++;
    return result;
  }
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


console.log('--- CHALLENGE 18 --- ');
function makeHistory(limit) {
  const elements = []
	return function(str) {
    if (str === 'undo') {
      const elem = elements.pop();
      if (!elem) {
        return 'nothing to undo'
      }
      return `${elem} undone`
    }
    
    elements.push(str)
    return `${str} done`
  }
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'walk undone'
console.log(myActions('undo')); // => should log 'nothing to undo'
