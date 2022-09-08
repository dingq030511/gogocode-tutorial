function fn1(){
  return fn2(1,2) + fn3(3,4)
}

function fn2(a, b){
  return a + b;
}

function fn3(a, b){
  return a * b;
}