import React from 'react'
import $ from 'jquery'

class AddEnquiry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {firstname: '', lastname: '', email: '', phone: '', comments: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {   
    event.preventDefault();
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:9292/api/save',
      dataType: 'text',
      type: 'POST',
      data: this.state,
      success: function(data) {
        this.setState({firstname: '', lastname:'', email: '', phone: '', comments:''});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <br />        
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
         <div className="form-group">
            <label htmlFor="inputFirstname" className="col-sm-2 control-label">Firstname</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputFirstname" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
            </div>
          </div>
           <div className="form-group">
            <label htmlFor="inputLastname" className="col-sm-2 control-label">Lastname</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputLastname" name="lastname" value={this.state.lastname}onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPhone" className="col-sm-2 control-label">Phone</label>
            <div className="col-sm-10">
              <input type="tel" className="form-control" id="inputPhone" name="phone" value={this.state.phone} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputComments" className="col-sm-2 control-label">Comments</label>
            <div className="col-sm-10">
              <textarea className="form-control" rows="3" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
            </div>
          </div> 

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </div>
        </form>
      </div>
    )
  } 
}

export default AddEnquiry