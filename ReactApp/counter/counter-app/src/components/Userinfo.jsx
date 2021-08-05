import { useState } from 'react';
import styles from '../appStyles.module.css'


const InputFields = () => {
    const [state,setState] = useState({fname:'',lname: '',age:'', error: '', valid: false});
    const [element,setElement] = useState(<></>)
    const handleChange = event => {
        const { name, value } = event.target
        setState({...state, [name]: value, error:'', valid: false})
    }


    const {fname,lname,age, error} = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fname) {
            setState({...state, error: 'Name Required'})
        } else if (!age) {
            setState({...state, error: 'Age Required'})
        } else {
            setState({...state, valid: true})
        }
    }

    return (
        <div className = {styles.header}>
            <div>
                {(state.valid && !state.error) ?
                <section>
                    <div>
                    <p>I'm {fname} {lname}</p>
                    <p>Today I'm:{age} years</p>
                    <p>Check Eligiblity:{age >= 18  ? 'You are eligible to get licence' : 'You are not eligible'} </p>
                    </div>
                </section>
                : error ? 
                <section>
                    {error}
                    </section> : 
                    <div/>
                }
                    
                <form onSubmit = {handleSubmit}> 
                    <div>
                        <label for = "fname" >Firstname</label>
                    </div>
                    <input  type = "text" name = "fname"  onChange = {handleChange}/>
                    <div>
                        <label for = "lname" >Lastname</label>
                    </div>
                    <input  type = "text" name = "lname"  onChange = {handleChange}/>
                    <div><label for = "age" >Age</label></div>
                    <input  type = "number" name = "age"  onChange = {handleChange}/>
                    <input type = "submit"/>
                </form> 
                </div>
        </div>
    )
}
const UserInfo = () => {
    return(
        <div>
            <InputFields/>
        </div>
    )
}

export default UserInfo;