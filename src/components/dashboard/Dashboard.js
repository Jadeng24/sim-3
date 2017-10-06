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
                                <Link to="/profile"><div className="editProfileBtn">Edit Profile</div></Link>
                            </div>    
                        </div>
                        <div className="welcome boxes">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</div>
                    </div>
                    <div className="dashBottom">
                        <div className="friendsDiv boxes">
                            <div className="friendsTop">
                                <p>Friends</p>
                                <p> SortedBy </p>
                                <select>
                                    <option> First Name </option>
                                    <option> Last Name </option>    
                                    <option> Relationship </option>    
                                    <option> Hobby </option>    
                                    <option> Hair Color </option>    
                                    <option> Eye Color </option>    
                                    <option> Birthday </option>    
                                </select>    
                            </div>
                            
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
