function translate2d(dx, dy) {
    return function(dx2,dy2) {
        return [dx + dx2, dy + dy2];    
    }
}

function memoizeTransform(f) {
    return function(x, y) {
      let result = f(x,y);
      console.log("funcao "+result)
      if(result[0] && result[0]) {
          return f(x,y);
       }      
        return [ 1, 1 ];
    }
}

const fakeTransform = () => {
    let first = true;
  
    return () => {
      if (first) {
        first = false;
        return [1, 1];
      }
  
      return false;
    };
};

const memoizedTransform = memoizeTransform(fakeTransform());

console.log("console 1 "+memoizedTransform(5, 5))
console.log("console 2 "+memoizedTransform(5, 5))

