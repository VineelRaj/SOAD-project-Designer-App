import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';

function Header(){
    return(
        <nav className='header'>
            <img className="logo" alt="logo" src={require('./Components/img/favicon.png')}/>
            <div className="headerName">Designer-Portal 
            <span style={{
                marginLeft:'25%',
                fontSize:'175%',
            color:'rgb(253, 27, 64)'
            }}>
            StyleMyWay</span>
            </div>
            <ul>
                <li><a href='#'><img src="SVG/man.svg" alt="account" /></a></li>  
                <li><a href='#'>VineelRaj</a></li>
                <li><a href='#'>logout</a></li>
            </ul>
        </nav>
    )
}

export default Header