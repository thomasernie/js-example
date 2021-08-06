import {useEffect  , useState} from 'react';
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

const Count = () => {
    const initial = 0;


    const [count,setCount] = useState(initial);
    
    const  minus = () => setCount(prev => prev - 1);

    const plus   = () => setCount(prev => prev + 1);

    const reset  = () =>  setCount(initial)

    return(
        <div>
            <div className = {styles.header}>
            <span className = {styles.count}>{count}</span>
            <Button   value = "-"     onClickFunction = {minus}/>
            <Button   value = "+"     onClickFunction = {plus}/>
            <Button   value = "reset" onClickFunction = {reset}/>
        </div>
    </div>
    )
}

// class Count extends ReactIs.Component{
//     constructor(props){
//         super(props);
//         const initial = 0;
//         this.state = {
//             count:initial
//         }
    //     static getDerivedStateFromProps(props,state){
    // console.log(`getderivedProps`,props)
    // return state;
// 

//     }
// }


export default Count;