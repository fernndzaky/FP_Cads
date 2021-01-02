import React from 'react';
import '../css/index.css';
import Header from '../components/Header';
import Post from '../components/Post';
import axios from 'axios';


class HomePage extends React.Component {
  constructor(){
    super()
    this.state = {
      posts :  [],
      content : ''
    }
  }

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    
    })
  }

  componentDidMount(){
    this.getPosts();
  }
  

  
  getPosts = () => {
    
    axios.get('https://i7e363vzhk.execute-api.ap-southeast-1.amazonaws.com/cads/get')
    .then(response => {
      console.log(response);
      this.setState({
        posts : response.data.reverse()
      })

    },
    error=>{
       
    })
  }


  createPost = async (e) => {
    e.preventDefault()
    const post = {
      name : 'Anonymous',
      content : this.state.content,
      major : 'Computer Science'
    }
    
    axios.post('https://i7e363vzhk.execute-api.ap-southeast-1.amazonaws.com/cads/insert',post)
    .then(response => {
        
      window.location.href = '/'
      
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

            <div className="col-md-6 col-12 pb-5">



              <h3 style={{color:"#145CA8",fontFamily:"PoppinsSemiBold"}} className="pt-5">Binusian Posts</h3>
              <div style={{marginTop:"30px"}}>
                  <form onSubmit={this.createPost}>
                    <div className="row m-0">
                        <div className="col-md-10 col-10 p-0" >
                          <input required type="text" onChange={this.onChange} name="content" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Share something here"/>
                        </div>
                        <div className="col-md-2 col-2 p-0" style={{textAlign:"right"}}>
                          <button type="submit" className="btn btn-success" style={{fontFamily:"PoppinsRegular"}}>Share</button>
                        </div>
                    </div>
                  </form>
              </div>
              {
              this.state.posts.map( (e , index) => {
                console.log(e);
                return(
                    <React.Fragment>
                      <Post 
                          post = {e}
                      />
                    </React.Fragment>

                )
              })              
              } 
         
  

              

            </div>

            <div className="col-md-3 col-0" >

            </div>
          </div>

          {/*<p>test</p>*/}


        </div>
      )
  }
}

export default HomePage;
