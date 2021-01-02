import React from 'react';
import '../css/index.css';

class Header extends React.Component {

  componentDidMount(){
  }
  

  delete = (e) => {


  } 

  render(){
    return(
        <div>
            <nav className="navbar navbar-light bg-light" style={{padding:"20px 200px"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{fontFamily:"PoppinsBold"}}>BINUS Student Forum</a>
                    <div className="d-flex">
                        <div className="dropdown" >       
                            <i style={{color:"#145CA8",fontSize:"18px"}} className="fas fa-user dropdown-toggle" data-toggle="dropdown"></i>
                            <div className="dropdown-menu" style={{marginTop:"10px",marginLeft:"-140px"}} aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/" style={{color: "#145CA8",fontFamily:"PoppinsSemiBold"}}><i className="fas fa-comment" style={{marginRight:"15px",padding:"10px 0px"}}></i>Home</a>
                                <a className="dropdown-item" href="/logout" style={{color: "#145CA8",fontFamily:"PoppinsSemiBold"}}><i className="fas fa-sign-out-alt" style={{marginRight:"15px",padding:"10px 0px"}}></i>Logout</a>
                            </div>
                        </div>                
                    </div>
                </div>
            </nav>
        </div>
      )
  }
}

export default Header;
