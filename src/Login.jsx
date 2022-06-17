import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* Email Starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/* Email Ends */}

        {/* Password Starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/* Password Ends */}

        <div className="text-end">
          {this.state.message}
          <button className="btn btn-primary m-1" onClick={this.onloginClick}>
            Login
          </button>
        </div>
      </div>
    );
  } //End of render

  onloginClick = async () => {
    console.log(this.state);

    var response = await fetch(
      `https://ecommerce-backend-store.herokuapp.com/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);
    if (body.length > 0) {
      // Success
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>,
      });
    } else {
      // Error
      this.setState({
        message: (
          <span className="text-danger">Invalid login, please try again</span>
        ),
      });
    }
  };
}
