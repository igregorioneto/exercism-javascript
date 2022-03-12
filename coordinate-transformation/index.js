function translate2d(dx, dy) {
    return function(dx2,dy2) {
        return [dx + dx2, dy + dy2];    
    }
}

function memoizeTransform(f) {
    return () => {
      const func = f();
      if(func) {
        console.log(func)
      }
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

