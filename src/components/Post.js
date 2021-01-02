import React from 'react';
import '../css/index.css';
import axios from 'axios';


class Post extends React.Component {

  componentDidMount(){
  }
  


  deletePost = async (e) => {
    e.preventDefault();
    const data = {
      id : this.props.post._id
    }
    await axios.delete('https://i7e363vzhk.execute-api.ap-southeast-1.amazonaws.com/cads/', {
      headers: data
     })

     window. location. reload(true)

}

  render(){
    return(
        <div>
            {/* START OF ONE POST */}
            <div className="mt-5">
                <div className="col-md-12 p-3 forumPost">
                    <div className="row m-0 p-0">
                        <div className="col-md-1 col-1 p-0">
                            <img id="" src="/assets/user_dp.png" className="img-fluid" width="75%" alt=""/>
                        </div>
                        <div className="col-md-10 col-10 p-0">
                            <a href="#" style={{fontFamily:"PoppinsSemiBold",fontSize:"18px",marginBottom:"0px !important",color:"#262626",textDecoration:"none"}}>{this.props.post.name}</a>
                            <p style={{fontFamily : "PoppinsLight", fontSize:"12px"}}>{this.props.post.major}</p>
                            <p style={{fontFamily : "PoppinsRegular",fontSize:"16px",marginBottom:"15px !important"}}> {this.props.post.content} </p>
                        </div>
                        <div className="col-md-1 col-1">
                            <div className="dropdown">
                                <i className="fas fa-caret-down" style={{color:"#145CA8",fontSize:"23px",marginLeft:"10px",float:"right"}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                <div className="dropdown-menu p-3 post_dropdown" aria-labelledby="dropdownMenuButton" style={{marginLeft:"-100px"}}>
                                <table>
                                    <tr>
                                        <td>
                                            <i className="far fa-pen-alt" style={{color:"#145CA8",fontSize:"16px",marginLeft:"2px"}}></i>
                                        </td>
                                        <td>
              
                                            <input type="text" name="id" value="#" hidden/>
                                            <a href={'/update/'+ this.props.post._id} style={{color:"#145CA8",marginLeft:"10px !important",fontFamily:"PoppinsSemiBold",textDecoration:"none"}} type="submit">Update</a>
                                    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="far fa-trash-alt" style={{color:"red",fontSize:"16px",marginLeft:"2px"}}></i>
                                        </td>
                                        <td>
                                            <form onSubmit={this.deletePost}>
                                                <input type="text" name="id" value={this.props.post._id} hidden/>
                                                <button className="btn p-0" style={{color:"red",marginLeft:"10px !important",fontFamily:"PoppinsSemiBold"}} onclick="return confirm('Are you sure you want to archive this post?')" type="submit">Delete</button>
                                            </form>                    
                                        </td>
                                    </tr>
                                </table>
                                </div>
                            </div>

                        </div>
                    </div>
                   
                </div>
          
            </div>
            {/* END OF ONE POST */}

        </div>
      )
  }
}

export default Post;
