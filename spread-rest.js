let x = [2,4,6]

let y = [...x]

y.push(18);
console.log(x);
console.log(y);

// strings 

const boy = ['sahed', 'rana', 'croy']

const girl = ['tina', 'rina','bina']

console.log([...boy, ...girl])

// example of rest 

function sum(a, b, c, ...restNumbers) {
     let sum = 0;
     for (let number of restNumbers){
          sum += number;
     }
     return a+b+c+ sum ;
}

console.log(sum(10,35,6,45,6,74,67,43,67,32));

