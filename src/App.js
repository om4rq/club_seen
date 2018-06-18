import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const panel = {
            backgroundColor: "red",
            padding: "20px"
        }
        const cont = {
            marginTop: "100px"
        }
        return (

            <div className="container" style={cont}>
                <div className="row justify-content-center">
                    <div className="col-8" style={panel}>
                        <div className="row">
                            <div className="col-6 text-left"><p>Rank</p></div>
                            <div className="col-6 text-right"><p>Price</p></div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>ClubName</h1>
                                <h6>Place,IL</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-left"><p>Music</p></div>
                            <div className="col-6 text-right"><p>Hours</p></div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
