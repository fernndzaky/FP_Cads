import React from 'react';
import '../css/index.css';

class Signin extends React.Component {

  componentDidMount(){
  }
  

  delete = (e) => {


  } 

  render(){
    return(
        <div>
            <h3 style={{color:"#145CA8",fontFamily:"PoppinsSemiBold"}} className="pt-5">Binusian Sign In</h3>
            <form style={{paddingBottom:"30px"}}>
                <div className="mb-3 mt-4">
                    <label for="exampleInputEmail1" className="form-label" style={{fontFamily:"PoppinsRegular"}}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label" style={{fontFamily:"PoppinsRegular"}}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary" style={{fontFamily:"PoppinsRegular"}}>Login</button>
            </form> 

            <a href="/signup">Do not have an account? Click here to sign up!</a>
        </div>
      )
  }
}

export default Signin;
