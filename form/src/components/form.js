import React from "react"
import {connect} from 'react-redux'

class Form extends React.Component {
  constructor(props){
    super(props)
      this.state={
        name:"",
        email:"",
        number:"",
        image:""
      }
  }
    inputChange = (e)=> {
      let id=Math.random()
        this.setState ({
            [e.target.id]: e.target.value,
            id:id
        }, console.log("new", this.state))
    }

    formSubmit = (e) => {
        e.preventDefault()
            this.props.addUser(this.state);
            this.setState({
              name:"",
              email:"",
              number:"",
              image:""
            }, console.log("update",this.state))
    }
render(){
    return (
            <div className="container">
              <h3 className="text-center mt-3">User Details </h3>
              <hr/>
              <form onSubmit={this.formSubmit}>
  <div className="form-row">
    <div class="col-md-4 mb-3">
      <label for="name">Name</label>
      <input type="text" class="form-control" name="name" id="name" value={this.state.name} onChange={this.inputChange} placeholder="First name"/>
    </div>
    <div class="col-md-4 mb-3">
      <label for="email">Email</label>
      <input type="email" class="form-control" name="email" id="email" onChange={this.inputChange} value={this.state.email} placeholder="Email" />
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Phone Number</label>
      <div class="input-group">
        <input type="number" class="form-control" name="number" id="number" onChange={this.inputChange} value={this.state.number} placeholder="Number"/>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="image">Image</label>
      <input type="text" class="form-control" name="image" id="image" onChange={this.inputChange} value={this.state.image} placeholder="Image"/>
    </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
    )
}
}
const mapStateToProps = state => {
  return {
      
  }
}
const mapStateToDispatch = (dispatch) => {
    return {
        addUser:(data)=>dispatch({type:"ADD_USER" ,data})
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(Form);

