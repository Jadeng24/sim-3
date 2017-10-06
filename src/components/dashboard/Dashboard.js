import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Nav from './../nav/Nav.js';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='dashboard'>

                    <div className="dashTop">
                        <div className="profileLink boxes">
                            <div className="profileImg"></div>
                            <div className="profileLinkContent"><p className="profileP">first</p><p className="profileP">last</p>
                                <div className="editProfileBtn">Edit Profile</div>
                            </div>    
                        </div>
                        <div className="welcome boxes">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</div>
                    </div>

                </div>
            </div>
        )
    }
}
