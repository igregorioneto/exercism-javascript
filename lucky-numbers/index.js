const num = String(1441)
  const numbArray = num.split('');
  let isTrue = false;
  let a = String(1441);
if(a.length % 2 === 0) {
    
   for (let index = 0; index < (a.length / 2); index++) {
        if(numbArray[index] === numbArray[a.length - 1]) {
            console.log(numbArray[index], numbArray[a.length - 1]);
            isTrue = true;
        } else {
            isTrue = false;
        }
    }   
} else {
    
}