import axios from "axios";
import React from "react";

class ContactData extends React.Component{
    render(){
        return(
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.data.fName}</td>
                <td>{this.props.data.lName}</td>
                <td>{this.props.data.message}</td>
            </tr>
        );

    }
}
class ContactDataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        contact_data_list: []
    };
    this.config =  {
        headers: {
          Authorization: "Token " + localStorage.getItem("auth_token"),
        }
    };
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("state: ", this.state);

    axios
      .post(this.props.baseurl + "/accounts/users/")
      .then((response) => {
        console.log("Got response: ", response);
        console.log("Employee is Created!");
        window.location.reload();
      });
  }

  componentDidMount(){
    axios.get(this.props.baseurl+"/contactform/contactformdata/", this.config).then((response)=>{
        console.log("response: ", response);
        this.setState({contact_data_list: response.data});
    });
  }
  render() {
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.contact_data_list.map((data, indx)=>{
                    return <ContactData data={data} id={indx+1} />
                })
            }
          </tbody>
        </table>
      </>
    );
  }
}

export default ContactDataList;
