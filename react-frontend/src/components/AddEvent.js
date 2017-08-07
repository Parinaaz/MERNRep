import React, { Component } from 'react';
import EventService from './EventService'

class AddEvent extends Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.addEventService=new EventService();
      

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
    	this.setState({value:event.target.value});


    }

    handleSubmit(event){

    	alert(this.state.value);
    	event.preventDefault();

    }

    render(){
    	return (
    		<div classname="container">
    		<form onSubmit={this.handleSubmit}>
    		<label>Add Event<input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/></label><br/>
    		<input type="submit" value="Add Event" className="btn btn-primary"/>
    		</form>
    		</div>
    		);




    }
}

export default AddEvent;