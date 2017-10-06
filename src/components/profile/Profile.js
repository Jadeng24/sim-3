import React, { Component } from 'react';
import axios from 'axios';
import Nav from './../nav/Nav.js'
import './Profile.css'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            relationship: '',
            hairColor: '',
            eyeColor: '',
            hobby: '',
            birthday: '',
            birthMonth: '',
            year: ''
        }
    }

    handleChange(prop, val) {
        console.log(prop)
        this.setState(
            {
                [prop]: val,
            }
        )
        console.log(this.state)
    }

    submit() {
        axios.post('/profile/update', this.state)
    }


    render() {
        return (
            <div>
                <Nav />
                <div className='profile'>
                    <div className='selects'>

                        <span>First Name</span><input onChange={(e) => this.handleChange('firstName', e.target.value)}></input>
                        <span>Last Name</span><input onChange={(e) => this.handleChange('lastName', e.target.value)}></input>
                        <span>Relationship Status</span>
                        <select id="relationship" onChange={(e) => this.handleChange('relationship', document.getElementById("relationship").value)}>
                            <option value="Single">Single</option>
                            <option value="Flirty but not serious">Flirty but not serious</option>
                            <option value="Just looking">Just creeping</option>
                            <option value="Taken">Taken</option>
                            <option value="Married">Married</option>
                            <option value="Open">Open</option>
                            <option value="polyamorous">polyamorous</option>
                        </select>
                        <span>Hair Color</span>
                        <select id="hairColor" onChange={(e) => this.handleChange('hairColor', document.getElementById("hairColor").value)}>
                            <option value="Brown">Brown</option>
                            <option value="Blonde">Blonde</option>
                        </select>
                        <span>Eye Color</span>
                        <select id="eyeColor" onChange={(e) => this.handleChange('eyeColor', document.getElementById("eyeColor").value)}>
                            <option value="blue">Blue</option>
                            <option value="Green">Green</option>
                        </select>
                        <span>Hobby</span>
                        <select id="hobby" onChange={(e) => this.handleChange('hobby', document.getElementById("hobby").value)}>
                            <option value="Video Games">Video Games</option>
                            <option value="Sports">Sports</option>
                        </select>
                        <span>Birthday</span>
                        <select id="birthday" onChange={(e) => this.handleChange('birthday', document.getElementById("birthday").value)}>
                            <option>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                        <span>Birth Month</span>
                        <select id="birthMonth" onChange={(e) => this.handleChange('birthMonth', document.getElementById("birthMonth").value)} >
                            <option value="1" >January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <span>Year</span>
                        <select id="year" onChange={(e) => this.handleChange('year', document.getElementById("year").value)}>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                        </select>
                    </div>
                    <button type='submit' onClick={_ => this.submit()} >Submit</button>
                </div>
            </div>
        )
    }
}