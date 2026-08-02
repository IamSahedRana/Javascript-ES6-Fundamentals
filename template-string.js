function shoppingCart(name ='Guest', amount ='0', discount= '0'){
     return `Customer Name : ${name}
            Billing Amount: ${amount}
            Total Discount: ${discount}
            Total Payable Amount: ${amount -= amount * discount/100} `
}

console.log(shoppingCart('sahed',2395, 15));
console.log(shoppingCart('Ruchika',449, 10));
console.log(shoppingCart('Riki',3950, 20));
console.log(shoppingCart('Jewl',2048, 50));
console.log(shoppingCart());