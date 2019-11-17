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
                    <button className='DesignTrigb' onClick={() => {AddToDesign(this.props.url,this.props.name)}}>Design</button>
                    <h1>{this.props.name}</h1>
                    
            </div>
        )
    }
    
} 

function Hot (){
    return(
        <div className="hot">
            {/* <p>Hot</p> */}
            <span style={{
                display:'flex',
                flexWrap:'wrap',
                minWidth:'250px',
                justifyContent:'space-around'
            }}>
            <TrendingCard url='SVG/card1_img.jpg' name="Pepe Skinny riped jeans(Men)" />
            <TrendingCard url="SVG/card2.jpg" name="Pepe White Shirt(Men)" />
            <TrendingCard url="SVG/card3.jpeg" name="Patchwork Leather Jacket(Men)" />
            <TrendingCard url='SVG/card1_img.jpg' name="Pepe Skinny riped jeans(Men)" />
            <TrendingCard url="SVG/card2.jpg" name="Pepe White Shirt(Men)" />
            <TrendingCard url="SVG/card3.jpeg" name="Patchwork Leather Jacket(Men)" />
            <TrendingCard url='SVG/card1_img.jpg' name="Pepe Skinny riped jeans(Men)" />
            <TrendingCard url="SVG/card2.jpg" name="Pepe White Shirt(Men)" />
            <TrendingCard url="SVG/card3.jpeg" name="Patchwork Leather Jacket(Men)" />
            <TrendingCard url='SVG/card1_img.jpg' name="Pepe Skinny riped jeans(Men)" />
            <TrendingCard url="SVG/card2.jpg" name="Pepe White Shirt(Men)" />
            <TrendingCard url="SVG/card3.jpeg" name="Patchwork Leather Jacket(Men)" />
            <TrendingCard url='SVG/card1_img.jpg' name="Pepe Skinny riped jeans(Men)" />
            <TrendingCard url="SVG/card2.jpg" name="Pepe White Shirt(Men)" />
            <TrendingCard url="SVG/card3.jpeg" name="Patchwork Leather Jacket(Men)" />
            <TrendingCard url='SVG/card1_img.jpg' name="Pepe Skinny riped jeans(Men)" />
            <TrendingCard url="SVG/card2.jpg" name="Pepe White Shirt(Men)" />
            {/* <TrendingCard url="SVG/card3.jpeg" name="Patchwork Leather Jacket(Men)" /> */}
            
      </span></div>
    )
}

export default Hot