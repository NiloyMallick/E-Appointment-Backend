import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function NewAppointmentRequest(props) {
  
  const [state, setShow] = useState({
    show: false, 
    employee_list: [{'name': ""}]

  });

  const handleClose = () => {
    
    setShow({show: false, employee_list: []});
  }
  const handleShow = () => {
    const url = props.baseurl+"/appointee/api/get-employee-list";
    let employee_list = [];
    axios.get(url, props.config).then((response)=>{
      employee_list = response.data.employee_list;
      setShow({show: true, employee_list: employee_list});
    });
    setShow({show: true, employee_list: employee_list});
  }

  const send = () => {
    handleClose();
    props.sendHandler();
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Request for an appointment
      </Button>

      <Modal show={state.show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Make Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <form>
                    <div class="form-group">
                      <label for="employee_name">Employee Name</label>
                      <select class="form-control" id="employees" required>
                        <option value="">Select Employee</option>
                          {
                            state.employee_list.map( (employee, indx) => {
                              return <option value={employee.id}>{employee.name} ({employee.email})</option>
                            })
                          }
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="Appointment_sub">Appointment Subject</label>
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Appointment Subject"
                        required
                      />
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label for="appointed_datetime">Appoint Date</label>
                          <input
                            type="date"
                            class="form-control"
                            id="appointed_date"
                            name="appointed_date"
                            placeholder="Appointment Date"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="appointed_time">Appoint Time</label>
                          <input
                            type="time"
                            class="form-control"
                            id="appointed_time"
                            name="appointed_time"
                            placeholder="Appointment Time"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{send();}}>
            Send Request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default NewAppointmentRequest;
