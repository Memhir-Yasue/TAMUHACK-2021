import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Firebase, { FirebaseContext } from './components/Firebase';


require('dotenv').config()

ReactDOM.render(
    // <FirebaseContext.Provider value={new Firebase()}>
        <App/>,
    document.querySelector('#root')
    // </FirebaseContext.Provider> 
    );
