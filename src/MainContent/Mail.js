import React,{Component} from "react";


// let productsToMailBox = []

// function AddToMailBox(imgUrl,name){
//     productsToMailBox.push({imgUrl,name})
//     console.log(productsToMailBox)
// }



class Mail extends Component{
    state = {
        product_added : false,
        clickMaximize : false,
        
        Mcont_style : {
            display: 'block',
            bottom: '0',
            left:'11.2%',
            position: 'fixed',
        },
        
        Mtitle_style :{
            backgroundColor: 'rgb(0, 204, 0)',
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
        MailBox : {
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
            const Mtitle = document.querySelector(".Mcont");
            if(Mtitle.contains(element.target)&& !(this.state.clickMaximize)){
                this.MailBox_Maximize(true) 
                
            }    
            else{
                this.MailBox_Maximize(false)
            }
               
        });
    } 
    
    MailBox_Maximize=(Mstate)=>{
        let MailBox  = {
            width: '1000px',
            padding: '1% 0 0 0',
            height: '0',
            overflowX: 'hidden',
            backgroundColor: '#282c34',
        }    
        let Mtitle_style ={
            backgroundColor: 'rgb(0, 204, 0)',
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
        if(Mstate){   
            MailBox.height = '400px'
            Mtitle_style.paddingLeft = '2%'
            Mtitle_style.paddingRight = '0'
            Mtitle_style.minWidth = '0'
        }
        else{         
            MailBox.height = '0'
            MailBox.width = '0' 
            Mtitle_style.maxWidth = '100%'
        }
        this.setState({ MailBox : MailBox , clickMaximize : Mstate , Mtitle_style : Mtitle_style  })
    }

    render(){
        return(
            <div style={ this.state.Mcont_style } className='Mcont'>
                <div  className='Mtitle' style={this.state.Mtitle_style}>MailBox</div>
                <div style={this.state.MailBox} className='MailBox'>
                    <div className='propic'><img  src='SVG/man.svg' alt='profilePic'/></div>
                    <div className='Detail'>vineelraj19@gmail.com</div>
                    <div className='Inbox'></div>
                    <div className='InboxImg'><img src='SVG/mail.svg' alt='inbox'/></div>
                    <div className='CompImg'><img src='SVG/ComposeMail.svg' alt='compose'/></div>
                    <div className='DraftImg'><img src='SVG/mail_open_process.svg' alt='Draft'/></div>
                </div>  
            </div>
        )  
    }
}
 
export default Mail