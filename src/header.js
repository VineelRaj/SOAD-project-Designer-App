import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';

function Header(){
    return(
        <nav className='header'>
            <img className="logo" alt="logo" src="SVG/221175.svg"/>
            <div className="headerName"> Designer Dashboard</div>
            <ul>
                <li><img src="SVG/user.png" alt="account"/></li>  
                <li>VineelRaj</li>
                <li>logout</li>
            </ul>
        </nav>
    )
}

export default Header