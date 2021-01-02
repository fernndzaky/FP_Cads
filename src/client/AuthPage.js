import React from 'react';
import '../css/index.css';
import Signin from '../components/Signin';
import Signup from '../components/Signup';


class AuthPage extends React.Component {

  componentDidMount(){
  
  }
  

  delete = (e) => {

  }

  render(){
    return(
        <div>
          <div className="row m-0">
            <div className="col-md-12 col-12" style={{padding:"50px 500px"}}>
              {window.location.pathname === '/signin' ?
                <Signin />
                :
                <Signup />

                
                }
              
            </div>

          </div>


        </div>
      )
  }
}

export default AuthPage;
