// console.log("Eu estou contido no script. Dentro do script, são adicionados métodos capazes de acessar e manipular as informações apresentadas na página da web. O DOM NÃO é parte do JavaScript! Na verdade, o DOM foi desenvolvido para ser independente de uma linguagem de programação específica! ")

//2 . Document && Window

//2.2. Métodos Globais

// window.alert("eu funciono globalmente");

// alert("eu também funciono globalmente");

// console.log("Eu também funciono globalmente!");

// console.log("Como todos funcionamos globalmente, nos existimos dentro do window, e independemos dos elementos contidos no 'document' para existir e funcionar"); 


//2.2. Métodos locais

// console.log(
// document.querySelector(".elemento-local").innerText);
// console.log(
// window.document.querySelector(".elemento-local").
// innerText);
// console.log(
// querySelector(".elemento-local").innerText);
// console.log(window.querySelector(".elemento-local").innerText);


//2. ids e classes dentro do Documento

// let elementoComID = document.getElementById('esse-tem-id');
//     // console.log(elementoComID);
    
// let primeiroElementoComAClasse = document.querySelector(".identificacao");
//     console.log(primeiroElementoComAClasse);

// let elementoComClasseEspecial = document.querySelector(".especial");
//     console.log(elementoComClasseEspecial);



// let elementosTodosDinamicos = 
// document.getElementsByClassName("identificacao");

        // for(let i = 0 ; i<elementosTodosDinamicos.length;i++){
        // console.log(elementosTodosDinamicos[i].innerText)
        // }

// console.log(elementosTodosDinamicos);

// let elementosTodosEstaticos =
//  document.querySelectorAll(".identificacao");
// //  for(let i = 0 ; i<elementosTodosEstaticos.length;i++){
// //         console.log(elementosTodosEstaticos[i].innerText);}

// // console.log(elementosTodosEstaticos);
// // console.log(typeof(elementosTodosEstaticos));
// // console.log(elementosTodosEstaticos.slice(0,1));


// let arrayElementosTodosEstaticos = Array.from(elementosTodosEstaticos);

// // console.log(arrayElementosTodosEstaticos);
// // console.log(typeof(arrayElementosTodosEstaticos));
// // console.log(arrayElementosTodosEstaticos.slice(0,1));

// console.log(arrayElementosTodosEstaticos[0]);
// console.log(elementosTodosEstaticos[0]);


// console.log("Os itens dentro dos elementos, são iguais entre si?")
// console.log(arrayElementosTodosEstaticos[0]===elementosTodosEstaticos[0]);


// console.log("E os elementos em si, são iguais um ao outro?")
// console.log(arrayElementosTodosEstaticos===elementosTodosEstaticos);

// let arrayArtifcialElementosEstaticos = [];








// let elementoAlterado =  document.getElementById('esse-tem-id');
// elementoAlterado.innerText+= "Eu fui adicionado :D";

// let elementoAdicionado = document.querySelector(".exemplos-elementos");
// elementoAdicionado.innerHTML+=`<div class = "identificacao">Eu sou uma DIV INTEIRA nova!!</div>`


// for(let i = 0 ; i<elementosTodosDinamicos.length;i++){
//     console.log(elementosTodosDinamicos[i].innerText)
//     }
//     console.log(" ");
//      console.log(" ");

//     for(let i = 0 ; i<elementosTodosEstaticos.length;i++){
//      console.log(elementosTodosEstaticos[i].innerText);}

        
// console.log(espacoResultadosAll);
// console.log(espacoResultadosAll[0]===espacoResultadosClassName[0])

// let espacoResultadosIDSelector = document.querySelector('#esse-tem-id');
// console.log(espacoResultadosIDSelector);

// espacoResultadosID.innerHTML+=`\n
// ${impressaoElementosDocument.innerText}`;


// let elementoAnalisado = document.querySelector(".impressao-texto");

// HTMLdoElemento = elementoAnalisado.innerHTML;

// textoVisivelDoElemento = elementoAnalisado.innerText;

// textoLiteraldoElemento = elementoAnalisado.textContent;

// console.log(HTMLdoElemento);
// console.log(typeof(HTMLdoElemento));
// console.log(HTMLdoElemento.length);

// console.log("");

// console.log(textoVisivelDoElemento);
// console.log(typeof(textoVisivelDoElemento));
// console.log(textoVisivelDoElemento.length);

// console.log("");

// console.log(textoLiteraldoElemento);
// console.log(typeof(textoLiteraldoElemento));
// console.log(textoLiteraldoElemento.length);













// // O que é um Element?

// // let exampleElement = document.querySelector(".sou-elemento-pai");

// // console.log(exampleElement);
// // console.log(exampleElement.childElementCount);
// // console.log(exampleElement.firstElementChild.innerText);

// //isso cai pra árvore do DOM também


// //CRIAÇÃO DE ELEMENTOS  

// const novaDIV = document.createElement("div");

// novaDIV.innerHTML+="Eu fui criado dinâmicamente, direto dentro do Script, usando createElement! Eu sou um Elemento"

//         // console.log(novaDIV);


// const novoTexto = document.createElement("p");

// novoTexto.classList.add("texto-exemplo")

// novoTexto.innerHTML+="Eu também fui criado dinâmicamente, direto dentro do Script, usando createElement! Eu Também sou um Elemento, e tenho uma classe para que seja mais fácil me encontrar"

//         // console.log(novoTexto);
//         // console.log(novoTexto.classList);


// const nodeTexto = document.createTextNode("Eu não sou um elemento, mas sou uma Node! Sou uma Node.Text, ou o texto que vai dentro de um elemento. Eu não posso ter uma classe");

//         // console.log(nodeTexto);
//         // console.log(nodeTexto.classList);


// // novaDIV.appendChild(nodeTexto);
//         // console.log(novaDIV);
       
// novoTexto.appendChild(nodeTexto);
//         // console.log(novoTexto);
// novaDIV.appendChild(novoTexto);
//         // console.log(novaDIV);


//         console.log(novaDIV.childNodes);


//         console.log(novaDIV.children);


//         console.log(novaDIV.firstChild);


//         console.log(novaDIV.lastChild);


        

