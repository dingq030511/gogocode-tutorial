function fn1(a){
  return fn2(a,2) + fn3(a,4)
}

function fn2(c, d){
  return c + d;
}

function fn3(e, f){
  return e * f;
}