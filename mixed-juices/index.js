const limes = [
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
    'medium',
  ];

  wedgesNeeded = 42;

let i = 0;
  let sum = 0;
while(i < limes.length && wedgesNeeded > 0) {

    if(limes[i] === 'small'){
      sum += 6;
    } else if(limes[i] === 'medium') {
      sum += 8;
    } else {
      sum += 10;
    }

    console.log(i, sum)

    i++;

    if(wedgesNeeded < sum) {
        break;
    }

}

console.log(i)
