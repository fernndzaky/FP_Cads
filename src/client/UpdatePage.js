import React from 'react';
import '../css/index.css';
import Header from '../components/Header';
import axios from 'axios';


class UpdatePage extends React.Component {
  constructor(){
    super()
    this.state = {
      id :  '',
      name :  '',
      major :  '',
      content :  '',
    }

  }

  componentDidMount(){
    this.getPostDetail();
  }
  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    
    })
  }

  updatePost = (e) => {
    e.preventDefault()

    const post = {
      id : this.state.id,
      name: this.state.name,
      major : this.state.major,
      content : this.state.content,
    }
    
    axios.post('https://i7e363vzhk.execute-api.ap-southeast-1.amazonaws.com/cads/update',post)
    .then(response => {
      
      window.location.href = '/'

      },
      error=>{
          
      })
    
  }
  getPostDetail = () => {
    axios.get('https://i7e363vzhk.execute-api.ap-southeast-1.amazonaws.com/cads/update/'+this.props.match.params.id)
    .then(response => {        
      this.setState({
        id: response.data._id,
        name :  response.data.name,
        major :  response.data.major,
        content :  response.data.content,
      })
    },
    error=>{
       
    })
  }
  render(){
    return(
        <div>
          <div className="row m-0" >
            <div className="col-md-12 p-0">
              <Header />
            </div>
            <div className="col-md-3 col-0" >

            </div>

            <div className="col-md-6 col-12">



              <h3 style={{color:"#145CA8",fontFamily:"PoppinsSemiBold"}} className="pt-5">Update Post</h3>

              {/* START OF ONE POST */}
              <div className="mt-4">
                <div className="col-md-12 p-3 forumPost">
                    <div className="row m-0 p-0">
                        <div className="col-md-1 col-1 p-0">
                            <img id="" src="/assets/user_dp.png" className="img-fluid" width="75%" alt=""/>
                        </div>
                        <div className="col-md-10 col-10 p-0">
                            <p style={{fontFamily:"PoppinsSemiBold",fontSize:"18px",marginBottom:"0px !important",color:"#262626",textDecoration:"none"}}>{this.state.name} </p>
                            <p style={{fontFamily : "PoppinsLight", fontSize:"12px"}}>{this.state.major} </p>
                            <input onChange={this.onChange} name="content" type="text" style={{border: "none",backgroundColor:"#E5ECF4",width:"100%",outline:"none",fontFamily:"PoppinsRegular",fontSize:"14px"}}value={this.state.content}  placeholder="Click to edit your post" />
                        </div>

                    </div>
                </div>
                <div className="col-md-12 col-2 p-0 mt-2 " style={{textAlign:"right"}}>
                  <form  onSubmit={this.updatePost}>
                    <button type="submit" className="btn btn-success" style={{fontFamily:"PoppinsRegular"}}>Update</button>
                  </form>
                </div>
            </div>
            {/* END OF ONE POST */}

              

            </div>

            <div className="col-md-3 col-0" >

            </div>
          </div>

          {/*<p>test</p>*/}


        </div>
      )
  }
}

export default UpdatePage;
