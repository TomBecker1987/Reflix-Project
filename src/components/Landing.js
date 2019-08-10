import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import '../styles/Landing.css';

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            users:[
                {name:"Mona"},
                {name:"Jasmyne"},
                {name:"Aura"},
                {name:"Tina"}
            ]
        }
    }

    render() {
       return (
           <div id="landing-container">
                <h1>WHO'S WATCHING?</h1>
                <div id="users">
                    {this.state.users.map( u => <Link to={`/catalog/${u.name}`}><div key={u.name} id={u.name} className="user"><p>{u.name}</p></div></Link> )}
                </div>
           </div>
       );
    }
}

export default Landing;