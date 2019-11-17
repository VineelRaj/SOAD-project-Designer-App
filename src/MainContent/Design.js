import React,{Component} from "react";
import '../App.css';
import {AddToInventory} from './Inventory';


let productsInDesign = []

function AddToDesign(imgUrl,name){
    productsInDesign.push({imgUrl,name})
    console.log(productsInDesign[0])
}

class Options extends Component{
    render(){
        return(
            <div className="card2" >
                    <div>Change size</div>
                    <div>Change texture</div>
                    <div>Change model</div>
            </div>
        )
    }
    
}
class DesignCard extends Component{ 
    state = {
        product_deleted : false
    }
    DesignDelete=(Imgurl)=>{
        // var products = 
        console.log('-*************** 1 ************')
        for( var i = 0; i < productsInDesign.length; i++){
            console.log('-*************** 12 ************') 
            if ( productsInDesign[i].imgUrl === Imgurl) {
                console.log('-*************** 13 ************')
                productsInDesign.splice(i, 1); 
                i--;
            }
        }
        console.log(productsInDesign)
        this.setState({product_deleted:false})
    }

    render(){
        return(
                <div className="pcard">
                    <img src={this.props.url} alt="card_img" />
                    <h1>{this.props.name}</h1>
                    <button className = 'b1' onClick={() => {AddToInventory(this.props.url,this.props.name)}}>Inventory</button>
                    <button className = 'b2' onClick={() => this.DesignDelete(this.props.url)}>Delete</button>
                    {/* <button>Delete</button>    */}
                </div>
        )

    }
}


class DesignPlace extends Component{
    state = {
        clickMaximize : false,
        
        Dcont_style : {
            display: 'block',
            bottom: '0',
            left:'6.5%',
            position: 'fixed',
        },
        CardCont : {
            height : '100%'
        },
        Dtitle_style :{
            backgroundColor: 'rgb(0, 102, 153)',
	        color: 'white',
            fontSize: '140%',
            height: '30%',
            minWidth: '105%',
            paddingTop: '1%',
            paddingBottom: '1%',
            paddingRight: '1%',
            paddingLeft: '2%',
            cursor: 'pointer',
         },
        DesignArea : {
            width:'0',
            padding: '1% 0 0 0',
            height: '0',
            overflowX: 'hidden',
            backgroundColor: '#282c34',
        },
    }
    constructor(){
        super()
        document.addEventListener("click", element => {
            // const Dtitle = document.querySelector(".Dtitle")
            // const b2 = document.querySelector(".b2")
            const Mcont = document.querySelector(".Mcont")
            const Ititle = document.querySelector(".Ititle")
            const Dcont = document.querySelector(".Dcont")
            // console.log(Dcont)
            if ((Dcont.contains(element.target))&& !(this.state.clickMaximize) ){
                Mcont.style.left = '72.3%'
                this.Design_Maximize(true)
            }
            else{
                Ititle.contains(element.target) && (Dcont.style.left === '65.8%') ? Mcont.style.left = '70.6%' :Mcont.style.left = '11.2%'  
                this.Design_Maximize(false)
            }
        });
    } 
    
    Design_Maximize=(Dstate)=>{
        let DesignArea  = {
            width: '1000px',
            padding: '1% 0 0 0',
            height: '0',
            overflowX: 'hidden',
            backgroundColor: '#282c34',
        }    
        let Dtitle_style ={
            backgroundColor: 'rgb(0, 102, 153)',
	        color: 'white',
            fontSize: '140%',
            height: '30%',
            minWidth: '105%' ,
            maxWidth: '100%',
            paddingTop: '1%',
            paddingBottom: '1%',
            paddingRight: '1%',
            paddingLeft: '2%',
            cursor: 'pointer'
        }    
        if(Dstate){   
            DesignArea.height = '400px'
            Dtitle_style.paddingLeft = '2%'
            Dtitle_style.paddingRight = '0'
            Dtitle_style.minWidth = '0'
        }
        else{         
            DesignArea.height = '0'
            DesignArea.width = '0' 
            Dtitle_style.maxWidth = '100%'
        }
        this.setState({ DesignArea : DesignArea , clickMaximize : Dstate , Dtitle_style : Dtitle_style  })
    }

    render(){
        return(
            <div style={ this.state.Dcont_style } className='Dcont'>
                <div  className='Dtitle' style={this.state.Dtitle_style}>Design</div>
                <div style={this.state.DesignArea}>
                    {productsInDesign.map((imgUrl) => {
                        // console.log(imgUrl.imgUrl)
                        return (<div  style={this.state.CardCont}><DesignCard url={imgUrl.imgUrl} name={imgUrl.name} /> <Options/> </div>)
                    })}
                </div>  
            </div>
        )  
    }
}
 
export {DesignPlace,AddToDesign}