import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import Appointments from "../../components/Appoinments/AppointmentsEmployee";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

class EmployeeDashboard extends React.Component {
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
    }
    this.acceptHandler = this.acceptHandler.bind(this);
    this.declineHandler = this.declineHandler.bind(this);
    this.pendHandler = this.pendHandler.bind(this);
  }

  updatePersonalInfo(){
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
    const url = this.baseurl+"/employee/api/get-appointments-counts";
    axios.get(url, this.config).then((res) => {
      console.log(url, res.data);
      const appointment_counts = {
        total_appointments: res.data.total,
        accepted_appointments: res.data.accepted, 
        declined_appointments: res.data.declined,
        pending_appointments: res.data.pending,
      }

      this.setState({appointment_counts});
    });
  }

  updateAppointments(){
    const url = this.baseurl + "/employee/api/appointments";
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

  declineHandler(id){
    axios.post(this.baseurl+"/employee/api/decline-appointment", {id: id}, this.config).then((res)=>{
      this.updateAppointments();
      this.updateAppointmentCounts();
    }).catch((errors)=>{
      alert("Couldn't accept: ", errors);
    });
  }
  pendHandler(id){
    axios.post(this.baseurl+"/employee/api/pend-appointment", {id: id}, this.config).then((res)=>{
      this.updateAppointments();
      this.updateAppointmentCounts();
    }).catch((errors)=>{
      alert("Couldn't accept: ", errors);
    });
  }
  acceptHandler(id){
    axios.post(this.baseurl+"/employee/api/accept-appointment", {id: id}, this.config).then((res)=>{
      this.updateAppointments();
      this.updateAppointmentCounts();
    }).catch((errors)=>{
      alert("Couldn't accept: ", errors);
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
          <Appointments
            baseurl={this.baseurl} 
            appointments={this.state.appointments} 
            declineHandler={this.declineHandler}
            pendHandler={this.pendHandler}
            acceptHandler={this.acceptHandler}
          />
        </Container>
    );
  }

};
export default EmployeeDashboard;
