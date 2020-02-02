import React, { Component } from 'react'

 class SignUp extends Component {
     state={
        email:"",
        password:"",
        firstName:"",
        lastName:""
     }
     handleChange=(e)=>{
        this.setState(
        {
         [e.target.id]:e.target.value   
        }
        )   
  }
     handleSubmit=(e)=>{
         e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
           <div className="container">
               <form onSubmit={this.handleSubmit} className="white">
                   <h5 className="grey-text text-darken-3">Sign Un</h5>
                   <div className="input-field">
                       <label htmlFor="firstName">FirstName</label>
                       <input type="text" id='firstName' onChange={this.handleChange}/>
                   </div> <div className="input-field">
                       <label htmlFor="lastName">LastName</label>
                       <input type="text" id='lastName' onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="email">email</label>
                       <input type="email" id='email' onChange={this.handleChange}/>
                   </div>
                    <div className="input-field">
                       <label htmlFor="password">password</label>
                       <input type="password" id='password' onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <button className="btn pink lighten-1 z-depth-0" >SIGN UP</button>
                   </div>
               </form>
           </div>
        )
    }
}

export default SignUp
