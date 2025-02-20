import React from "react";

const App2 = () => {
  return <div>App2</div>
};

export default App2;

// rafce

// Arrow Function
// const App2 = () => <h1>Ola, Mundo!</h1>;

// Nomeacao de Componente
// PascalCase

// Nomeacao de Variavel, Funcao...
// camelCase = CorcundaDoCamelo

// Nomeacao de Classes
// kebab-case

// export default, posso importar com qualquer nome e sem chaves
// export "sem default" so posso importar entre chaves e com o nome exportado

// Self closing tag
// <Header></Header>
// <Header/>

/*
element.style {
  background-color: antiquewhite;
  padding: 20px;
  margin: 20px;
  border: solid 5px black;
  /* box-sizing: content-box; */
  /*width: 500px;
  height: 37.600;
  */

  // Nomeacao de classes em css
  // Metodologia BEM
  // Blocks
  // Elements
  // Modifiers
  // bloco__elemento--modificador
  // header
  // header__link
  // header--link--small
  // item-list__header
  // nomes compostos sao separados por -  

  // Tag vazia em React = Fragment ou Fragmento

  // Componentes recebem "props"

  /* { items === 5 ? (
    <>
    <SingleItem /> 
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
  </>
) : (
  <>
    <SingleItem /> 
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem /> 
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
  </>
)}
*/

/*
{ Array(items) 
          .fill() 
          .map( (currentValue, index) => ( 
          <SingleItem key={` ${title}- ${index} `} />
          ) ) }
*/

// Spread operator
// ...

// Objetos/Arrays = Armazenam endereços de onde os valores estao

// Quando componentes se Re-Renderizao ?
// Uma das ocasioes e quando uma variavel de estado usada por esse componente e atualizada.

// Hook - useState