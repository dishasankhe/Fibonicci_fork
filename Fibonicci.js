function fibo(n){
  if (n<2){
    return n;
  }
  else{
    return fibo(n-1)+(n-2);
  }
}

process.on('message',(msg) => {
  const result=fibo(msg);
  process.send(result);
  
});
