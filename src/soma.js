import React, {Component} from 'react'; 


function Somar () {
  const num1 = Number(this.state.num1);
  const num2 = Number(this.state.num2); 
  const resultado = num1+num2; 

  return resultado; 

}


class Soma extends Component {
    
    constructor (props){
        super (props);
        this.state = { num1: "", num2:"", resultado: ""}
    }
  
  
    render (){
        return (   

        <div className="Soma">
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
        )

    }

}

export default Soma
