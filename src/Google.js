import React, { Component } from 'react';
import {GoogleLogin } from 'react-google-login'
import TwitterLogin from 'react-twitter-login'
import FacebookLogin from 'react-facebook-login'
var FontAwesome = require('react-fontawesome')

class Google extends Component{
  state={
    isLoggedIN:false,
    isLoggedINtwitter: false,
    isLoggedINgoogle: false,
    isLoggedINfacebook:false,
    email: "",
    name:"",
    image:"",
    nameF:"",
    nametwitter:"",
    imageurl:"",

  }
   render(){
     let lastContent
    let Twitterlogin,navbar
    let Googlelogin,logout
let fbContent,content

let responseFacebook=(response) => {
  console.log(response)
  this.setState({
      isLoggedIN:true,
      isLoggedINfacebook:true,
      nameF: response.name,
      imageurl:response.imageUrl

   })
}




    const  authHandler= (err,response)=>{
          console.log(err,response)
          this.setState({
              isLoggedINtwitter:true,
              isLoggedIN:true,
              nametwitter:response.screen_name
          })
      }



      const responseGoogle = (response) => {
        console.log(response)
        
        this.setState({
          isLoggedINgoogle:true,
          isLoggedIN:true,
          name: response.profileObj.name,
          email:response.profileObj.email,
          image:response.profileObj.imageUrl
       
        })
      }
      logout=()=>{
        this.setState({
          isLoggedIN:false,
          isLoggedINgoogle:false,
          isLoggedINtwitter:false,
          isLoggedINfacebook:false
        })
      }

   




      if(this.state.isLoggedINtwitter){
        Twitterlogin=(
          <div >
              <h4>Welcome {this.state.nametwitter}</h4>

                    <button className="btn btn-danger" onClick={logout}>Logout</button>

          </div>
      )
      }



    if(this.state.isLoggedINgoogle){
    
      Googlelogin=(
          <div className="aftergooglelogin">
            <h4 style={{justifyContent:"center",margin:"0"}}>Welcome {this.state.name}</h4>
            <img className="googleimg" alt={this.state.name} src={this.state.image} style={{width:"150px",height:"150px"}} />
            <div>
            <button  className="btn btn-danger" onClick={logout} style={{marginTop:"10px",marginBottom:"10px"}}>Logout</button>
            
              </div>
            </div>
        )  
  }


if(this.state.isLoggedINfacebook){
  fbContent=(
    <div>
      <h4>Welcome {this.state.nameF}</h4>
      <img src={this.state.imageurl}/>
    <button className="btn btn-danger" onClick={logout}>Logout</button>
            
    </div>
  )
}



if(!this.state.isLoggedIN){
  
  
   
  content=(
    <div className="content ">
         Hello react
        Let Choose any one login method to get your Information
   
      </div>
  )
  
  fbContent=(
    <div >
    <FacebookLogin
    appId="2829196113969850"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="btnFacebook"
    icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}}>
    </i>}
    textButton = "&nbsp;&nbsp;Sign In with Facebook"        
    />
</div>    
    
    
    )
    
 
   
  Googlelogin=(
 <GoogleLogin
    clientId="994413254701-1f6ok1focicpgreh4m2d7v2166p9urcb.apps.googleusercontent.com"
    render={renderProps => (
      <button className="btnGoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google-plus" style={{ marginLeft: 
        '5px' }}/> 
        <span>&nbsp;&nbsp;Sign In with Google</span>                                                               
 </button>
    )}
    onSuccess={responseGoogle}
    buttonText="Login with Google"
    onFailure={responseGoogle}
  />
     
        
    
    )
   
  
  Twitterlogin=(
   
    <TwitterLogin
    authCallback={authHandler}
    consumerKey={"W4c3Zfyt1Q1MCuzKk5ps5SuSm"}
    consumerSecret={"JjzOVXAn56a6vuGFJzPHrc9a0alKQq1HRvG0iD1bFzcHJOy974"}
    callbackUrl={"https://pavang707.github.io/login"}
    children={<button className="btntwitter"><i className="fa fa-twitter" style={{ marginLeft: 
      '5px' }}/>
       <span>&nbsp;&nbsp;Sign In with Twitter</span>
      </button>}
      
  /> 
  )
  

    

  lastContent=(
    <div id="lastcontent">
      By Continuing your agree to our <b>Terms and Condition</b>
      
      </div>
  )
 
    }
//finish isloggedin false
      

    return(

   <div className="jumbotron " id="whole">
       
           
       {content}    
   
    <div className="row">
    <div className="col-12 "id="cr7">
      {Googlelogin}       
  
     </div> 
     <div className="col-12 google"id="cr7">
   
     {fbContent}

 </div>
 <div className="col-12"id="cr7">
 
 {Twitterlogin}
 
 </div>
 <div id="lastcontent">
   {lastContent}
   </div>

      </div>
   
   </div>
         
        
     
    )
  }
}

export default Google;