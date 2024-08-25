import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Landing.css";  // Create and import a custom CSS file

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 animated fadeInDown">
                  Project Management Tool
                </h1>
                <p className="lead animated fadeInUp">
                  Create your account to join active projects or start your own
                </p>
                <hr className="animated zoomIn" />
                <Link className="btn btn-lg btn-primary mr-2 animated bounceIn" to="/register">
                  Sign Up
                </Link>
                <Link className="btn btn-lg btn-secondary animated bounceIn" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);
