let a = 3;

global.b = 123;
this.c = 456;
this.d = false;
this.e = 'teste';

console.log(this.a);
console.log(global.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando variavel maluca: sem var e let
//não faça isso em casa
abc = 3
console.log(global.abc) ;
