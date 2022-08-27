import './App.css';
import styled from "styled-components";
import { useRef } from 'react';


function App() {
  return (
    <div className="App">
      <MainContainer>
        <StatementContainer>
          <p>
            Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:<br></br>
            Múltiplos de 3 por la palabra "fizz".<br></br>
            Múltiplos de 5 por la palabra "buzz".<br></br>
            Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".<br></br>
          </p>
        </StatementContainer>
        <Exercise>
        </Exercise>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  width: 80vw;
  height: 100vh;
  margin: auto;
  background-color: snow;
  border-right: 3px solid black;
  border-left: 3px solid black;
`
const StatementContainer = styled.div`
  margin: auto;
  width: 50%;
  padding: 1%;
  border-bottom: 5px solid black;
  border-right: 5px solid black;
  border-left: 5px solid black;
  margin-bottom: 5%;
  p{
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`
/* ejercicio */


const Exercise = () => {
  const ExerciseContainerRef = useRef(null)
  const numbers = []
  const numberPrinter = () => {
    for (let i = 0; i < 101; i++) {
      numbers.push(i)
    }
    return numbers.map(x => {
      if (x % 3 === 0 && x % 5 === 0) {
        return (<p>fizzbuzz</p>)
      }
      else if (x % 3 === 0) {
        return (<p>fizz</p>)
      } else if (x % 5 === 0) {
        return (<p>buzz</p>)
      } else {
        return (<p>{x}</p>)
      }

    })
  }
  return (
    <ExerciseContainer ref={ExerciseContainerRef}>
      {numberPrinter()}
    </ExerciseContainer>
  )
}
const ExerciseContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  flex-direction:column;
  width: 100%;
  background-color: #14762D;
  height: 60%;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
  padding: 10%;
  font-size: 1.2rem;
`

export default App;
