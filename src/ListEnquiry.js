import React from 'react'
import $ from 'jquery'


class ListEnquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.getEnquiries = this.getEnquiries.bind(this);
  }

  getEnquiries() {
    $.ajax({
      url: 'http://localhost:9292/api/list',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function(data) {
          this.setState({data: data}); 
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.getEnquiries();
  }

  render() {
    return (
      <div>
        <br />        
        <p className="text-right">
          <button onClick={this.getEnquiries} className='btn btn-primary'>Refresh</button>
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(item => (
              <tr key={item.date}>
                <td>{item.date}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.comments}</td>      
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListEnquiry