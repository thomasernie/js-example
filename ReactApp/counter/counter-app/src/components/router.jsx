import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Count from './counter';
import UserCount from './counterValue';
import UserInfo from './Userinfo';
import Calc from './mathFunc';
import styles from '../appStyles.module.css'


function App(){
    return(
        <Router>
            <div>
                <nav>
                    <div className = {styles.flex}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/counter">counter</Link>
                        </li>
                        <li>
                            <Link to="/counterValue">CounterUser</Link>
                        </li>
                        <li>
                            <Link to="/Userinfo">Form</Link>
                        </li>
                        <li>
                            <Link to="/Calc">Calculation</Link>
                        </li>
                    </div>
                </nav>


                <Switch>
                    <Route path = "/counter">
                        <Count/>
                    </Route>
                    <Route path = "/counterValue">
                        <UserCount/>
                    </Route>
                    <Route path = "/Userinfo">
                        <UserInfo/>
                    </Route>
                    <Route path = "/calc">
                        <Calc/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;