import React, { Component } from "react";

class NameForm extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            handleFirstNameChange,
            handleLastNameChange,
            email,
            handleEmailChange,
        } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
            </form>
        );
    }
}

export default NameForm;
