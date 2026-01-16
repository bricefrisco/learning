/* CHALLENGE 1 */
function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?
// Partnah -> Howdy


/* CHALLENGE 2 */
function delayedGreet() {
  setTimeout(() => { console.log('welcome')}, 3000)
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */
function helloGoodbye() {
  setTimeout(() => console.log('good bye'), 2000)
  console.log('hello')
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 2 seconds): good bye


/* CHALLENGE 4 */
function brokenRecord() {
  setInterval(() => console.log('hi again'), 1000)
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */
function limitedRepeat() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log('hi for now'), i * 1000)
  }
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */
function everyXsecsForYsecs(func, interval, duration) {
  for (let i = 0; i < duration / interval; i++) {
    setTimeout(func, i * interval * 1000)
  }
}
// Uncomment the following lines to check your work!
function theEnd() {
   console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 5, 19);


/* CHALLENGE 7 */
function delayCounter(target, wait) {
	return function() {
    for (let i = 0; i < target; i++) {
      setTimeout(() => console.log(i+1), wait * i)
    }
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */
function promised (val) {
  return new Promise((res, rej) => {
    setTimeout(() => res(val), 2000)
  })
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    this.second = 0;
    this.cb =  cb;
    this.interval = null;
  }
  
  start() {
    this.interval = setInterval(() => {
      if (this.second === 60) {
        this.second === 1
      } else {
        this.second++;
      }
      
      this.cb(this.second);
    }, 1000);
  }
  
  reset() {
    clearInterval(this.interval);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//      clock.reset();
//      console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */
function debounce(callback, interval) {
  let timeoutId;
  let blocked = false;
  
  return function() {
    if (!blocked) {
      blocked = true;
      return callback();
    }
    
    clearTimeout(timeoutId)
    setTimeout(() => {
      blocked = false;
    }, interval)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

