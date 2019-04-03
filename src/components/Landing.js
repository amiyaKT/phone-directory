import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../actions';

class App extends Component {
  onClick = index => {
    this.props.deleteContact(index);
  };

  render() {
    return (
      <div>
        <Link to="/addContact" className="w-100 btn btn-primary">
          Add Contact
        </Link>
        {this.props.contacts.length > 0 ? (
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.props.contacts.map((contact, index) => (
                <tr key={index}>
                  <th>{contact.name}</th>
                  <td>{contact.number}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.onClick(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="jumbotron jumbotron-fluid mt-3">
            <div className="container">
              <h2 className="text-center">You have No Contacts To Show</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(
  mapStateToProps,
  { deleteContact }
)(App);
