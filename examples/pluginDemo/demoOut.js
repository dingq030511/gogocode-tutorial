function fn1(){
  return fn2(1,2) + fn3(3,4)
}

function fn2(a,b){
    console.log('函数fn2开始调用');
    console.log('参数a,b :', a,b);
    return a + b;
}

function fn3(a,b){
    console.log('函数fn3开始调用');
    console.log('参数a,b :', a,b);
    return a * b;
}