import React from 'react';
import { ReactDOM } from 'react';
import config from '../config'
import firebase from 'firebase/app'


const App = () => {
    return (
        <FirebaseAuthProvider {...config} firebase = {firebase}>
            <div>
                <h2></h2>
                <button></button>
            </div>
        </FirebaseAuthProvider>
    )
}