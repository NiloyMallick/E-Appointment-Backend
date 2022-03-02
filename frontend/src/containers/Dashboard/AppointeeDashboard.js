import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import Appointments from "../../components/Appoinments/AppointmentsAppointee";
import NewAppointmentRequest from "../../components/Modal/Modal";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

class AppointeeDashboard extends React.Component {
  constructor(props){
    super(props);
    this.baseurl = this.props.base_url;
    this.config =  {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      }
    };
    this.state = {
      personal_info: {
        id: undefined,
        name: undefined,
        email: undefined
      },
      appointment_counts: {
        total_appointments: 0,
        accepted_appointments: 0,
        declined_appointments: 0, 
        pending_appointments: 0,
      },
      appointments: [], 
      employees: []
    }
    this.sendAppointmentRequest = this.sendAppointmentRequest.bind(this);
    this.updateAppointments = this.updateAppointments.bind(this);
    this.updateAppointmentCounts = this.updateAppointmentCounts.bind(this);
    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  sendAppointmentRequest () {
    console.log("Sending new appointment request...")
    let appointed_datetime = document.getElementById("appointed_date").value+" "+document.getElementById("appointed_time").value;
    let employee = document.getElementById("employees").value;
    let subject = document.getElementById("subject").value;

    const url = this.baseurl+"/appointee/api/appointments";
    const data = {
      employee: employee, 
      subject: subject,
      appointed_datetime: appointed_datetime
    }
    axios.post(url, data, this.config).then((response)=>{
      this.updateAppointments();
      this.updateAppointmentCounts();
    });
  }

  updatePersonalInfo(){
    console.log("===> updating personal info... ");
    const url = this.baseurl+"/accounts/users/me/";
    axios.get(url, this.config).then((res) => {
      const personal_info = {
        id: res.data.id,
        name: res.data.name, 
        email: res.data.email
      }

      this.setState({personal_info});
    });
  }

  updateAppointmentCounts(){
    const url = this.baseurl+"/appointee/api/get-appointments-counts";
    axios.get(url, this.config).then((res) => {
      const appointment_counts = {
        total_appointments: res.data.total,
        accepted_appointments: res.data.accepted, 
        declined_appointments: res.data.declined,
        pending_appointments: res.data.pending
      }

      this.setState({appointment_counts});
    });
  }

  updateAppointments(){
    const url = this.baseurl + "/appointee/api/appointments";
    axios.get(url, this.config).then((res) => {

      const appointments = res.data.appointments;
      this.setState({ appointments });
    });
  }

  componentDidMount(){
    this.updatePersonalInfo();
    this.updateAppointmentCounts();
    this.updateAppointments();
  }

  deleteHandler(id){
    axios.post(this.baseurl+"/appointee/api/delete-appointment", {id: id}, this.config).then((res)=>{
      this.updateAppointments();
      this.updateAppointmentCounts();
    }).catch((errors)=>{
      alert("Couldn't Delete!");
    });
  }
  render(){
    return (
      <Container>
        <PersonalInfo 
          baseurl={this.baseurl} 
          personal_info={this.state.personal_info} 
          appointment_counts={this.state.appointment_counts} 
        />
        <NewAppointmentRequest 
          baseurl={this.baseurl}
          config={this.config}
          sendHandler={this.sendAppointmentRequest}
        />
        
        <Appointments
          baseurl={this.baseurl} 
          appointments={this.state.appointments} 
          deleteHandler={this.deleteHandler}
        />
      </Container>
    );
  }
};
export default AppointeeDashboard;
