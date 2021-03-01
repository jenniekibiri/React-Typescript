import React, { Component } from "react";
interface IState {
  story: any;
  stories: any[];
  name: string
}

export class App extends Component<{}, IState> {
   constructor(props: any) {
    super(props)
 this.state = {
    story: '',
    name: "jenny",
    stories: [],
  };

  this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
   e.preventDefault();

  alert(this.state.story)

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

        <div className="card " style={{ width: "48rem" }}>
          <div className="card-body ">
            <p className="text-muted">
              I woke up at 6 oclock in the morning. We had breakfast and dressed
              up. Today we all went to Fantasize Amusement park near Pune. We
              started from home at 7 oclock.
            </p>
          </div>
        </div>
        <div className="card mt-2 " style={{ width: "48rem" }}>
          <div className="card-body ">
            <p className="text-muted">
              I woke up at 6 oclock in the morning. We had breakfast and dressed
              up. Today we all went to Fantasize Amusement park near Pune. We
              started from home at 7 oclock.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
