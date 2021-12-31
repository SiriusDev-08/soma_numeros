import React from 'react';
import './App.css';

function App() {

  const [resultado, setResultado] = React.useState(0);
  const [num1, setNum1] = React.useState(0); 
  const [num2, setNum2] = React.useState(0); 

  function Somar() {
    setResultado(Number(num1)+Number(num2));
  }

  return (
    <div className="App">
        <input 
          value={num1}
          onChange={ (e) => setNum1(e.target.value) }
        /> 

        <input 
          value={num2}
          onChange={ (e) => setNum2(e.target.value) }
        /> 

        <button type="button" onClick={Somar}>Somar!</button>  
        <h1>{resultado}</h1>


    </div>
  );
}

export default App;
