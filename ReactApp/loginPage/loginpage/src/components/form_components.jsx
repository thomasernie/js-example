import React, { useState,useEffect} from 'react';
import styles from '../appStyles.module.css'


function FormComp(){
    const [details,setDetails] = useState({email:null,password:null,valid:true,error:''});

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setDetails({...details,[name]:value,valid:true})
    }
    const {email,password,valid,error} = details;

    const handleInput = () => {
        if(email === null || !email){
            setDetails({...details,valid : false,error:'Please enter email'})
        }
        else if(password === null || !password){
            setDetails({...details,valid : false,error:'Please enter password'})
        }
    }
    
    return(
        <div className = {styles.container_form}>
            <div className = {styles.left}>
                <form>
                    <h1 className = {styles.primary_heading}>Hello world!</h1>
                        <input type = "email"    className = {styles.input} name = "email" placeholder = "Email" onChange = {handleChange}/>
                        <input type = "password" className = {styles.input} name ="password" placeholder =  "Password" onChange = {handleChange}/>
                </form>
                <div className = {styles.label}>
                    <div>
                        <a href = "#" title="Forgot Password" >Forgot password</a>
                    </div>
                </div>
                <div className = {styles.flex}>
                    <button className = {styles.buttonLog} onClick={handleInput} title = "Log in">Log in</button>
                    <button className = {styles.buttonSign} title = "Log in">Sign in</button>
                </div>
                    {!valid ? <h2>{error}</h2>:<div></div>}
            </div>
            <div className = {styles.img2}></div>
        </div>
    )
}


export default FormComp;