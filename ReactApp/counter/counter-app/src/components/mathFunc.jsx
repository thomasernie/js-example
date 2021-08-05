import {useState} from 'react';
import styles from '../appStyles.module.css'
import React from 'react';

const Calc = () => {
    const initial = {num1:0,num2:0,error:''};
    const initialResult = null;
    const [state,setState] = useState(initial);
    const [result,setResult] = useState(initialResult);

    const handleChange = (event) => {
        const {name,value} = event.target;
        setState({...state,[name]: value});
    }

    const {num1,num2,error} = state;
    const handleSelect = (event) => {
        const {value} = event.target;
        const v1 =num1 ? parseFloat(num1) : null;
        const v2 =num2 ? parseFloat(num2) : null;
        if(v1 === 0){
            setState({...state,error:'Enter number1'})
        }else if(v2 === 0){
            setState({...state,error:'Enter number2'})
        }
        else{
            switch(value){
                case "+" : setResult( v1 + v2 );
                break;
                case "-" : setResult( v1 - v2 );
                break;
                case "*" : setResult( v1 * v2 );
                break;
                case "/" : setResult( v1 / v2 );
                break;
                case "%" : setResult( v1 % v2 );
                break;
                case " " :setResult("")
            }
        }
    }

    return(
        <div className = {styles.header}>
            <form >
            <input type= "number" name = "num1" onChange = {handleChange}/>
            <input type= "number" name = "num2"  onChange = {handleChange}/>
            { result === null || isNaN(result) ? 
            <div>{error}</div> : 
            <div className = {styles.decBtn}>Output:{result}
            </div> 
            }
            <select onChange = {handleSelect}>
                <option value = "">Select Methods</option>
                <option value = "+">Add</option>
                <option value = "-">subtract</option>
                <option value = "*">Mutiply</option>
                <option value = "/">Divide</option>
                <option value = "%">Modulus</option>
            </select>
            </form>
        </div> 
    )
}

export default Calc;