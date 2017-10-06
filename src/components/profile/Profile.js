import React, { Component } from 'react';
import axios from 'axios';
import Nav from './../nav/Nav.js'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    render() {
        return (
            <div className='profile'>
                <Nav />
                <span>First Name</span><input></input>
                <span>Last Name</span><input></input>

                
            </div>
        )
    }
}