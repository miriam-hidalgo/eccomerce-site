import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* Email Starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input type="text" className="form-control" />
        </div>
        {/* Email Ends */}

        {/* Password Starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input type="password" className="form-control" />
        </div>
        {/* Password Ends */}
      </div>
    );
  }
}
