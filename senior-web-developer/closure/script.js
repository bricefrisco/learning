function closure() {
  let num = 0;
  return function() {
    return ++num;
  }
}

const closure2 = () => {
  let num = 0;
  return () => ++num;
}

console.log(closure);

const c1 = closure();
c1();
c1();
console.log(c1());

const c2 = closure2();
c2();
c2();
console.log(c2());