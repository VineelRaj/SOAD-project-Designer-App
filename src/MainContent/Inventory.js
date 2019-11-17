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
            bottom: '0',
            left:'0',
            position: 'fixed',
        },
        
        Ititle_style :{
            backgroundColor: 'tomato',
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
        Inventory : {
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
            const Ititle = document.querySelector(".Ititle");
            const Dtitle = document.querySelector(".Dcont");
            const Mcont = document.querySelector(".Mcont");
            if(Ititle.contains(element.target)&& !(this.state.clickMaximize)){
                Dtitle.style.left = '65.8%'
                // Mcont.style.left = '69.8%'
                this.Inventory_Maximize(true) 
                
            }    
            else{
                Dtitle.style.left = '6.5%'
                Mcont.style.left = '11.2%'
                this.Inventory_Maximize(false)
            }
               
        });
    } 

    Inventory_Maximize=(Istate)=>{
        let Inventory  = {
            width: '1000px',
            padding: '1% 0 0 0',
            height: '0',
            overflowX: 'hidden',
            backgroundColor: '#282c34',
        }    
        let Ititle_style ={
            backgroundColor: 'tomato',
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
        if(Istate){   
            Inventory.height = '400px'
            Ititle_style.paddingLeft = '2%'
            Ititle_style.paddingRight = '0'
            Ititle_style.minWidth = '0'
        }
        else{         
            Inventory.height = '0'
            Inventory.width = '0' 
            Ititle_style.maxWidth = '100%'
        }
        this.setState({ Inventory : Inventory , clickMaximize : Istate , Ititle_style : Ititle_style  })
    }

    render(){
        return(
            <div style={ this.state.Icont_style }>
                <div  className='Ititle' style={this.state.Ititle_style}>Inventory</div>
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