import React, { Component } from "react";
interface IState {
  story: any;
  stories: any[];
  
  loaded: boolean
}

export class App extends Component<{}, IState> {
   constructor(props: any) {
    super(props)
 this.state = {
    story: '',
   loaded: false,
    stories: [],
  };

  this.handleSubmit = this.handleSubmit.bind(this)
  }
 

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
   e.preventDefault();
  const {stories,story}=this.state
  
  stories.push({story:story})
  this.setState({
    stories,
    loaded:true
  })
 


  }
  
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
      this.setState({story:e.target.value});
  };

  render() {
   
    return (
      <div className="container bg-warning">
        <h3 className=" text-white text-center">My Diary</h3>
        <div className="input-group mb-3">
         
          <form onSubmit={this.handleSubmit} >
           <input
            type="text"
            className="form-control"
            placeholder="addStory"
            aria-label="addStory"
            name="story"
            onChange={this.handleChange}
            value={this.state.story}
            aria-describedby="basic-addon1"
          />
          <input
            type="submit"
            className="btn btn-danger"
            value="add"
           
          />
          
          
          </form>
         
        </div>

        <div className="container">
          <p className="text-muted text-center text-white">
            The stories goes here...
          </p>
        </div>
{ this.state.loaded ==true ?(
 this.state.stories.map((story,i)=>{

    return(
       <div className="card " key={i}  style={{ width: "48rem" }}>
          <div className="card-body ">
            <p className="text-muted">
             {story.story}
            </p>
          </div>
        </div>
    )
  })
):(
        <div className="card " style={{ width: "48rem" }}>
          <div className="card-body ">
            <p className="text-muted">
             Write your diary
            </p>
          </div>
        </div>)
 
}
      
      </div>
    );
  }
}

export default App;
