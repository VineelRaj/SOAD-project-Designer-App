import React,{Component} from 'react'
import {AddToDesign} from './Design'
import '../App.css';

// import ReactDOM from 'react-dom';




class TrendingCard extends Component{
    render(){
        // console.log(this.props)
        return(
            <div className="card">
                    <img src={this.props.url} alt="card_img" />
                    <h1>{this.props.name}</h1>
                    <button onClick={() => {AddToDesign(this.props.url,this.props.name)}}>Design</button>
            </div>
        )
    }
    
} 

function Hot (){
    return(
        <div className="hot">
            <img  className="hotImg" alt="trnd_img" src="SVG/flame.svg"/><p>Hot</p>
            <TrendingCard url='SVG/card1_img.jpg' name="Pepe Skinny riped jeans(Men)" />
            <TrendingCard url="SVG/card2.jpg" name="Pepe White Shirt(Men)" />
            <TrendingCard url="SVG/card3.jpeg" name="Patchwork Leather Jacket(Men)" />
        </div>
    )
}

export default Hot