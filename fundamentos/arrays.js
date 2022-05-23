const valores = [7,7,8,9,2];
console.log(valores[0]);

valores[5] = 10;

console.log(valores);

console.log(valores.length);

valores.push(3,5,6,7,8);
console.log(valores + '\n');

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);