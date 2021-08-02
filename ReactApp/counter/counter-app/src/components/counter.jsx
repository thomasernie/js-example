import {useState} from 'react';
import styles from '../appStyles.module.css'


function Counter(){
        return (<div><Count /></div>)
}

function Count(props){
    let [count,setCount] = useState(0);

    function minus(){
        setCount(count - 1) ;
    }

    function plus(){
        setCount(count + 1) ;
    }

    function reset(){
        setCount(count = 0)
    }
    
    return (
        <div>
            <div className = {styles.header}>
                <div>
            <span className = {styles.count}>{count}</span>
            <button className = {styles.incBtn} onClick = {minus}>-</button>
            <button className = {styles.decBtn} onClick = {plus}>+</button>
            <button className = {styles.reset}  onClick = {reset}>RESET</button>
            </div>
            </div>
            </div>
    )
}

export default Counter;
