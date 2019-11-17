import React,{Component} from "react";
import '../App.css';




let productsToInventory = []

function AddToInventory(imgUrl,name){
    productsToInventory.push({imgUrl,name})
    console.log(productsToInventory)
}

class InvetoryCard extends Component{
    state = {
        product_deleted : false
    }
    InventoryDelete=(Imgurl)=>{
        // var products = 
        // console.log('-*************** 1 ************')
        for( var i = 0; i < productsToInventory.length; i++){
            // console.log('-*************** 12 ************') 
            if ( productsToInventory[i].imgUrl === Imgurl) {
                // console.log('-*************** 13 ************')
                productsToInventory.splice(i, 1); 
                i--;
            }
        }
        // console.log(productsToInventory)
        this.setState({product_deleted:false})
    }   
    render(){
        return(
            <div className="pcard">
                <img src={this.props.url} alt="card_img" />
                <h1>{this.props.name}</h1>
                {/* <button onClick={add_to_inventory(img=this.props.url,name=this.props.name)}>Design</button> */}
                <button className = 'b1'>Send </button>
                <button className = 'b2' onClick={() => this.InventoryDelete(this.props.url)}>Delete</button>    
            </div>
        )

    }
}


class Inventory extends Component{
    state = {
        product_added : false,
        clickMaximize : false,
        
        Icont_style : {
            display: 'block',
            top: '20%',
            left:'0',
            position: 'fixed',
        },
        closeI:{
            display: 'none',
            fontSize:'100%',
            marginLeft: '50%',
        },
        
        Ititle_style :{
            backgroundColor: 'rgb(253, 27, 64)',
	        color: 'white',
            fontSize: '140%',
            height: '30px',
            minWidth: '130%',
            textAlign:'center',
            paddingTop: '1%',
            paddingBottom: '2%',
            // paddingRight: '1%',
            // paddingLeft: '3%',
            cursor: 'pointer',
            fontWeight:'700',
            // marginRight:'20%',
            borderRadius:'0 5px 5px 0'
         },
        Inventory : {
            width:'0',
            padding: '1% 0 0 0',
            height: '0',
            overflowX: 'hidden',
            backgroundColor: '#282c34',
        },
    }
    Inventory_Maximize=(Istate)=>{
        var Iclose = document.getElementsByClassName('Dcont')[0]
        if (Iclose.style.left === '0px'){
            let Icont_style = {
                display: 'block',
                top: '20%',
                left:'0',
                position: 'fixed', 
            }
            let closeI={
                display: 'none',
                fontSize:'100%',
                marginLeft: '85%',
            }
            let Inventory  = {
                width: '1000px',
                padding: '1% 0 0 0',
                height: '0',
                overflowX: 'hidden',
                backgroundColor: '#282c34',
                borderRadius: '0 0 5px 5px',
            }    
            let Ititle_style ={
                backgroundColor: 'rgb(253, 27, 64)',
                color: 'white',
                fontSize: '140%',
                // height: '35px',
                minWidth: '130%' ,
                // maxWidth: '100%',
                paddingTop: '1%',
                paddingBottom:'2%',
                // paddingLeft: '2%',
                cursor: 'pointer',
                fontWeight:'700',
                // marginRight:'20%',
                borderRadius:'5px 5px 0 0',
    
            }    
            if(Istate){   
                Inventory.height = '400px'
                Ititle_style.paddingLeft = '2%'
                Ititle_style.maxWidth = '100%'
                Ititle_style.minWidth = '0'
                Ititle_style.paddingBottom = '1%'
                Icont_style.top = '30%'
                Icont_style.left = '20%'
                Icont_style.zIndex = '1'
                closeI.display = 'inline'
            }
            else{         
                Inventory.height = '0'
                Inventory.width = '0' 
                Ititle_style.borderRadius = '0 5px 5px 0'
                Ititle_style.textAlign = 'center'
                Ititle_style.height = '30px'
                Ititle_style.minWidth = '130%'
            }
            this.setState({ Inventory : Inventory , clickMaximize : Istate , Ititle_style : Ititle_style , Icont_style : Icont_style , closeI : closeI })
        
        }
        else{
            window.alert('Designing area is open. Please close it ti continue to inventory.. Thank You!!')
        }
    }

    render(){
        return(
            <div style={ this.state.Icont_style } className='Icont'>
                <div style={this.state.Ititle_style}><span onClick={()=>this.Inventory_Maximize(true)}>Inventory</span><div onClick={()=>this.Inventory_Maximize(false)} style={this.state.closeI}>&times;</div></div>
                <div style={this.state.Inventory}>
                    {productsToInventory.map((imgUrl) => {
                        console.log(imgUrl.imgUrl)
                        return <InvetoryCard url={imgUrl.imgUrl} name={imgUrl.name} />
                    })}
                </div>  
            </div>
        )  
    }
}
 
export {Inventory,AddToInventory}