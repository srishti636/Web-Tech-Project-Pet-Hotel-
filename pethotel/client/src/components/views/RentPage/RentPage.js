import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class RentPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    var dt = new Date();
    var price = 0;
    var daydiff = ((this.state.startDate - dt)/86400000)+0.1;
    if(daydiff >=0)
    {
        price = daydiff*15;
        console.log(daydiff);
        document.write("The total price is " + price + " $USD");

    }
  }
 
  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div style = {{ maxWidth: '700px', margin: '10rem auto' }}className="form-group">
        <label>Pet Name</label>
        <br/>
        <input type = "text" placeholder = "Pet Name"></input>
        <br/>
        <br/>
        <label>Pet Age</label>
        <br/>
        <input type = "text" placeholder = "Pet Age"></input>
        <br></br>
        <br/>
        <br></br>
        <br></br>
        <label>Checkout Date</label>
        <br/>
        <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="dd/MM/yyyy"
          />
          <br>
          </br>
          <br></br>
        <label>Customer Name</label>
        <br/>
        <input type = "text" placeholder = "Customer name"></input>
        <br/>
        <br></br>
        <label>Customer e-mail id</label>
        <br/>
        <input type = "text" placeholder = "Customer email id"></input>
        <br></br>
        <br></br>
        <label>Contact</label>
        <br/>
        <input type = "text" placeholder = "Contact"></input>
        <br></br>
        <br>
        </br>
        <label>Other Details</label>
        <br/>
        <input type = "textarea" placeholder = "Other Details"></input>
        <br/>
        <br/>
       
          <button className="btn btn-primary">Submit Data</button>
        </div>
      </form>
    );
  }
  
}

export default RentPage;