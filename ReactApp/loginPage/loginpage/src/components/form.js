import React from 'react';
import styles from '../appStyles.module.css'

function Nothing(){
    return (
        <div><Container/>
        
        </div>
    )
}

function Form(){
    return(
        <div className = {styles.container_form}>
            <div className = {styles.left}>
                <h3 className = {styles.primary_heading}>It's Great to have you back</h3>
            <form>
                <div> 
                <div><label for = "email">Email</label>
                </div><input type = "email" name = "email" placeholder = "Email"/></div>
                <div><label for = "password" >Password</label></div>
                <input type = "password" name = "Password" placeholder = "Password"/>
            </form>
            <Label/>
            </div>
        </div>
    )
}

function Container(){
    return(
        <div className = {styles.container}>
            <div><Form/></div>
        </div>
    )
}

function Label(){
    return(
        <div className = {styles.label}>
            <div >
                <input type = "checkbox" name = "remember"/> 
                <label  for= "remember">Remember me</label>
            </div>
            <div>
                <a href = "#" >Forgot password</a>
            </div>
        </div>
    )
}
export default Nothing;