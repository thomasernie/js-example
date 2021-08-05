import {useState} from 'react';
import styles from '../appStyles.module.css'


const Button = (props) => {
    let style;
    if(props.value === "-"){
        style = styles.decBtn;
    }
    if(props.value === "+"){
        style = styles.decBtn;
    }
    if(props.value === "reset"){
        style = styles.reset;
    }
    return <button  className = {style} onClick = {props.onClickFunction}>{props.value}</button>
}


const UserCount = () => {
    const initial = 0;
    const [count,setCount] = useState(initial);
    const [data,setData] = useState(initial);

    const getData = (event) => setData(+event.target.value);
    console.log(data);
    const  minus = () => setCount(count - data);

    const plus   = () => setCount(count + data);

    const reset  = () =>  setCount(initial)
    
    const check = () => data === 0;
    return(
        <div>
            <div className = {styles.header}>
                {
                    data === 0 ? <div/> : <div>Please Enter a number</div>
                }
            <label>Count:
                <input type = "number" name = "name" onChange = {getData}/>
            </label>
            <span className = {styles.count}>{count}</span>
            <Button   value = "-"     onClickFunction = {minus,check}/>
            <Button   value = "+"     onClickFunction = {plus,check}/>
            <Button   value = "reset" onClickFunction = {reset,check}/>
            </div>
        </div>
    )
}

export default UserCount;