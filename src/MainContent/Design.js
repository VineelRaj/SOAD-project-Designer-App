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
        for( var i = 0; i < productsInDesign.length; i++){
            if ( productsInDesign[i].imgUrl === Imgurl) {
                productsInDesign.splice(i, 1); 
                i--;
            }
        }
        this.props.parentMethod(true)
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
            top: '25%',
            left:'0',
            position: 'fixed',
        },
        closeD:{
            fontSize:'100%',
            display: 'none',
        },
        CardCont : {
            height : '100%'
        },
        Dtitle_style :{
            backgroundColor: 'rgb(253, 27, 64)',
	        color: 'white',
            fontSize: '140%',
            height: '30px',
            minWidth: '185%',
            paddingTop: '1%',
            paddingBottom:'2%',
            textAlign: 'center',
            cursor: 'pointer',
            fontWeight:'700',
            borderRadius:'0 5px 5px 0'
        },
        DesignArea : {
            width:'0',
            padding: '1% 0 0 0',
            height: '0',
            overflowX: 'hidden',
            backgroundColor: '#282c34',
        },
    }
    Design_Maximize=(Dstate)=>{
        var Iclose = document.getElementsByClassName('Icont')[0]
        if (Iclose.style.left === '0px'){
            let DesignArea  = {
                width: '1000px',
                padding: '1% 0 0 0',
                height: '0',
                overflowX: 'hidden',
                backgroundColor: '#282c34',
                borderRadius: '0 0 5px 5px',
            }
            let Dcont_style = {
                display: 'block',
                top: '25%',
                left:'0',
                position: 'fixed',
            }    
            let closeD={
                display: 'none',
                fontSize:'100%',
                marginLeft: '85%',
            }
            let Dtitle_style ={
                backgroundColor: 'rgb(253, 27, 64)',
                color: 'white',
                fontSize: '140%',
                height: '30px',
                minWidth: '185%' ,
                // maxWidth: '100%',
                paddingTop: '1%',
                paddingBottom: '2%',
                // paddingRight: '1%',
                // paddingLeft: '2%',
                cursor: 'pointer',
                fontWeight:'700',
                // marginRight:'20%',
                borderRadius:'5px 5px 0 0'
            }    
            if(Dstate){   
                DesignArea.height = '400px'
                Dtitle_style.paddingLeft = '2%'
                Dtitle_style.maxWidth = '100%'
                Dtitle_style.minWidth = '0'
                Dtitle_style.paddingBottom = '1%'
                closeD.display = 'inline'
                Dcont_style.top = '30%'
                Dcont_style.left = '20%'
                Dcont_style.zIndex = '1'
            }
            else{         
                Dtitle_style.borderRadius = '0 5px 5px 0'
                DesignArea.height = '0'
                DesignArea.width = '0' 
                Dtitle_style.textAlign = 'center'
            }
            this.setState({ DesignArea : DesignArea , clickMaximize : Dstate , Dtitle_style : Dtitle_style , Dcont_style : Dcont_style , closeD : closeD })
        }
        else{
            window.alert("Inventory is open. Please close it ti continue to Designing area.. Thank You!!")
        }
        
    }

    render(){
        return(
            <div style={ this.state.Dcont_style } className ='Dcont'>
                <div style={this.state.Dtitle_style}><span onClick={()=> this.Design_Maximize(true)}>Design</span><div onClick={()=> this.Design_Maximize(false)} style={this.state.closeD}>&times;</div></div>
                <div style={this.state.DesignArea}>
                    {productsInDesign.map((imgUrl) => {
                        // console.log(imgUrl.imgUrl)
                        return (<div  style={this.state.CardCont}><DesignCard url={imgUrl.imgUrl} name={imgUrl.name} parentMethod = {this.Design_Maximize} /> <Options/> </div>)
                    })}
                </div>  
            </div>
        )  
    }
}
 
export {DesignPlace,AddToDesign}