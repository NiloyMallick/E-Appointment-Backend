import React from "react";
import { Container } from "react-bootstrap";

class AppointmentStatus extends React.Component{
  render(){
    return (
      <td className={"text-right text-"+['info', 'success', 'danger'][this.props.status]}>{["Pending", "Accepted", "Declined"][this.props.status]}</td>
    );
  }
}


class Appointment extends React.Component{
  parseDateTime(datetime) {
    let date, time;
    if (datetime) {
      datetime = datetime.split("T");
      date = datetime[0];
      datetime = datetime[1].split(":");
      time = datetime[0] + ":" + datetime[1];
    }
    return { date: date, time: time };
  }

  render(){
    const appointed_datetime = this.parseDateTime(this.props.appointment.appointed_datetime);
    const creation_datetime = this.parseDateTime(this.props.appointment.creation_datetime);

    return (
        <tr key={this.props.appointment.id}>
          <td className="text-center">{this.props.appointment.id}</td>
          <td className="text-nowrap" style={{ textTransform: 'capitalize' }}>{this.props.appointment.subject}</td>
          <td>{this.props.appointment.employee.user.name}</td>
          <td>{this.props.appointment.employee.user.email}</td>
          <td className="text-right">{appointed_datetime.date}</td>
          <td className="text-right">{appointed_datetime.time}</td>
          <AppointmentStatus status={this.props.appointment.status} />
          <td className="td-actions text-center">
            <button type="button"  rel="tooltip" className="btn btn-danger btn-icon btn-sm ml-2"  title="Delete Appointment" onClick={()=> this.props.deleteHandler(this.props.appointment.id)}>
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </tr>
    );
  }
}
class Appointments extends React.Component {
  
  render() {
    return (
      <Container>
      <div className="row mb-5">
        <div className="col">
          <h3 className="text-center">Your Appointments</h3>
          <table className="table" id="appointments_table">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Subject</th>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th className="text-right">Date</th>
                <th className="text-right">Time</th>
                <th className="text-right">Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>{
                this.props.appointments.map((appointment, indx)=>{
                  return <Appointment appointment={appointment}  deleteHandler={this.props.deleteHandler} />
                })  
              }</tbody>
          </table>
        </div>
      </div>
    </Container>
    )
  }
}


export default Appointments;