import axios from "axios";
import React from "react";

class EmployeeSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        name: "", 
        password: "12345", 
        re_password: "12345", 
        is_employee: true
    };
  }

  submitHandler(e){
    e.preventDefault();
    console.log("state: ", this.state);
    
    axios.post(this.props.baseurl+"/accounts/users/", this.state).then((response)=>{
        console.log("Got response: ", response);
        console.log("Employee is Created!");
        window.location.reload();
    });
  }
  render() {

    return (
        <>
        <form  onSubmit={(e)=>{this.submitHandler(e)}}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder="Enter email"
                    onChange={(e)=>{ this.setState({email: e.target.value})} }
                />
                <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    name="name"
                    onChange={(e)=>{ this.setState({name: e.target.value})} }
                />
                <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <button type="submit" class="btn btn-primary">
            Submit
            </button>
        </form>
        </>
    );
  }
}

export default EmployeeSignup;
