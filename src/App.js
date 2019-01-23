import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
import { connect } from "react-redux";
import { changeUserName, logout } from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Miley"
    };
  }

  handleClick = () => {
    console.log("state.userName" + this.state.userName);
    this.props.changeUserName({ userName: this.state.userName });
  };

  handleAdmin = () => {
    this.props.changeUserName({ userName: "Admin" });
  };

  handleLogout = () => {
    this.props.logout();
  };
  componentDidMount() {
    this.props.changeUserName({ userName: "Miley" });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-light">
          <a> Hi! {this.props.myUserName} </a>
          <form className="form-inline">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={event =>
                this.setState({ userName: event.target.value })
              }
            />
          </form>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Change user name
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.handleAdmin}
          >
            Click to change to admin
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </nav>

        <h3>Login Status:{this.props.myUserStatus}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //what kind of values fo we want to use in current page
  return {
    myUserName: state.user.userName,
    myUserStatus: state.user.userStatus
  };
}

export default connect(
  mapStateToProps,
  {
    changeUserName,
    logout
  }
)(App);
//high order commponent 1.要改变的值，2 action
