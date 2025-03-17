const pessoa = {
    firstName: "Rodrigo",
    sayHi: () => {
        console.log(this.firstName); // `this` não é o objeto `pessoa`
    }
};

setTimeout(pessoa.sayHi, 1000); // Não funciona como esperado

const pessoa = {
    firstName: "Rodrigo",
    sayHi: () => {
        console.log(pessoa.firstName); // Acessa `firstName` diretamente
    }
};

setTimeout(pessoa.sayHi, 1000); // Funciona, mas não usa `this`

const pessoa = {
    firstName: "Rodrigo",
    sayHi: function() {
        console.log(this.firstName); // `this` se refere ao objeto `pessoa`
    }
};

setTimeout(pessoa.sayHi, 1000); // Não funciona como esperado
// Dentro de callbacks, perde o contexto do this.
// setTimeOut não "sabe" que a função sayHi pertence a pessoa, veja como construimos a função

setTimeout(pessoa.sayHi.bind(pessoa), 1000); // Funciona corretamente


const pessoa = {
    firstName: "Rodrigo",
    sayHi: () => {
        console.log(pessoa.firstName); // Acessa `firstName` diretamente
    }
};

setTimeout(() => pessoa.sayHi(), 1000); // Funciona, mas não usa `this`

const pessoa = {
    firstName: "Rodrigo",
    sayHi: function() {
        console.log(this.firstName); // `this` se refere ao objeto `pessoa`
    }
};

setTimeout(() => pessoa.sayHi(), 1000); // Funciona corretamente
// arrow function não tem this, ele herda ou do global ou do contexto lexo
// pessoa.sayHi(), é chamado diretamente. sayHi é uma função regular, poranto tem o this. This dentro de objetos refere-se
// ao proprio objeto, portanto a pesosa.sayHi
// arrowFunction portanto herda dele. 
