import React, { Component } from "react";
import { Link } from "react-router-dom";
import NameForm from "./NameForm";

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: "", lastName: "", email: "" };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }

    handleSubmit(event) {
        alert(
            "First Name: " +
                this.state.firstName +
                " Last Name: " +
                this.state.lastName +
                " Email: " +
                this.state.email
        );
        event.preventDefault();
    }

    changeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };

    changeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };

    changeEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    render() {
        return (
            <div className="homepage App">
                <h2 className="Title">CIT CONNECT</h2>
                <div className="Content">
                    <NameForm
                        firstName={this.state.firstName}
                        handleFirstNameChange={this.changeFirstName}
                        lastName={this.state.lastName}
                        handleLastNameChange={this.changeLastName}
                        email={this.state.email}
                        handleEmailChange={this.changeEmail}
                    ></NameForm>

                    <button onClick={this.handleSubmit}>text</button>
                </div>
            </div>
        );
    }
}

export default Match;
