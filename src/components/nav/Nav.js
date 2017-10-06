import React, { Component } from 'react';
import house from './house.png';
import search from './search.png';

export default class Nav extends Component {
    constructor() {
        super()
        this.state = {
            page: ''
        }
    }


    render() {
        return (
            <div className='nav'>
                <img src={house} alt='home'/>
                <img src={search} alt='search'/>
            </div>
        )
    }

}