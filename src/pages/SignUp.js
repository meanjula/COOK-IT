import React, { Component } from "react";
import Headerone from "../components/Headerone";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
    popup: false,
  };
  formHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="signup-container">
        <Headerone />
        <main className="main-container">
          <SignUpForm formHandler={this.formHandler} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
