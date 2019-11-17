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
            top: '30%',
            left:'0',
            position: 'fixed',
        },
        closeM:{
            fontSize:'100%',
            display: 'none',
        },
        Mtitle_style :{
            backgroundColor: 'rgb(253, 27, 64)',
	        color: 'white',
            fontSize: '140%',
            height: '30px',
            minWidth: '145%',
            textAlign: 'center',
            paddingTop: '1%',
            cursor: 'pointer',
            fontWeight:'700',
            // marginRight:'20%',
            borderRadius:'0 5px 5px 0'
        },
        MailBox : {
            width:'0',
            padding: '1% 0 0 0',
            height: '0',
            overflowX: 'hidden',
            backgroundColor: '#282c34',

        },
        

    }
    
    
    MailBox_Maximize=(Mstate)=>{
        var body = document.querySelector('.popUpBackground')
        body.style.backgroundColor = 'rgba(0,0,0,0.8)'
        body.style.zIndex = '1'
            
        let MailBox  = {
            width: '1000px',
            padding: '1% 0 0 0',
            height: '0',
            overflowX: 'hidden',
            backgroundColor: '#282c34',
        } 
        let Mcont_style ={
            display: 'block',
            top: '30%',
            left:'0',
            position: 'fixed',
        }
        
        let closeM={
            display: 'none',
            fontSize:'100%',
            marginLeft: '50%',
        }
        let Mtitle_style ={
            backgroundColor: 'rgb(253, 27, 64)',
	        color: 'white',
            fontSize: '140%',
            height: '30px',
            minWidth: '145%' ,
            // maxWidth: '100%',
            paddingTop: '1%',
            // paddingBottom: '1%',
            cursor: 'pointer',
            fontWeight:'700',
            // marginRight:'20%',
            borderRadius:'0 5px 0 0'
        }    
        if(Mstate){   
            body.style.width = '100%'
            MailBox.height = '400px'
            Mtitle_style.paddingLeft = '2%'
            Mtitle_style.minWidth = '0'
            Mtitle_style.maxWidth = '100%'
            Mtitle_style.paddingBottom = '1%'
            closeM.display = 'inline'
            Mcont_style.top = '30%'
            Mcont_style.left = '20%'
            Mcont_style.zIndex = '1000'
        }
        else{  
            body.style.width = '0'
               
            MailBox.height = '0'
            MailBox.width = '0' 
            Mtitle_style.borderRadius = '0 5px 5px 0'
            Mtitle_style.textAlign = 'center'
            // Mtitle_style.height = '75px'
            // Mtitle_style.minWidth = '110%'
            // Mtitle_style.maxWidth = '100%'
        }
        this.setState({ MailBox : MailBox , clickMaximize : Mstate , Mtitle_style : Mtitle_style , Mcont_style : Mcont_style , closeM : closeM })
    }

    render(){
        return(
            <div style={ this.state.Mcont_style } className='Mcont'>
                <div style={this.state.Mtitle_style}><span onClick={()=> this.MailBox_Maximize(true)}>Mail Box</span><div onClick={()=> this.MailBox_Maximize(false)} style={this.state.closeM}>&times;</div></div>
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