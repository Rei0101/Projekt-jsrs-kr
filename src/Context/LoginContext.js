import React, { Component, createContext } from "react";

export const LoginContext = createContext();

class LoginContextProvider extends Component {
  state = {
    jeUlogiran: false
  };
  toggleLogin = () => {
    this.setState({ jeUlogiran: !this.state.jeUlogiran });
  };
  render() {
    return (
      <LoginContext.Provider
        value={{ ...this.state, toggleLogin: this.toggleLogin }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginContextProvider;
