const {fork} = require('child_process');
const child= fork('fibonicci.js');

child.on('message',(result)=> {
  console.log('Fibonicci=== :', result);
  
});

child.send(10);
