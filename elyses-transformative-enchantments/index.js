const deck = [9, 10, 5, 9, 4, 3, 1, 2, 6, 7];
const firstCard = deck.shift();
const lastCard = deck.pop();
let a = [];
for (let index = 0; index < (deck.length/2); index++) {
    //console.log(deck[index], deck[deck.length - (1 + index)]);  
    a[index] = deck[index];
    a[deck.length - (1 + index)] =  deck[deck.length - (1 + index)]; 
    if(index === (deck.length/2) - 1) {
        a[index] = lastCard;
        a[index + 1] = firstCard;
    }
    
}
console.log(a)
