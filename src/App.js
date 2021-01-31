import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Pages/Home'
import Dashboard from './components/Pages/Dashboard'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'




class App extends React.Component {
   
    render () {
        return (
            <div>
               <BrowserRouter>
                <div>
                    <Navbar></Navbar>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/Home" exact component={Home}></Route>
                </div>
               </BrowserRouter>
            </div>
        );
    }
  
}

export default App;