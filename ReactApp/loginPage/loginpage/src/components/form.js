import React from 'react';
import styles from '../appStyles.module.css'
import FormComp from './form_components';


function Form(){
    return (
        <div><Container/>
        </div>
    )
}

function Container(){
    return(
        <section className = {styles.container }>
            <div className = {styles.img}></div>
            <div><FormComp/></div>
        </section>
            
    )
}

export default Form;