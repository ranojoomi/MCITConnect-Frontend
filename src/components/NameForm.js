import React, { Component } from "react";
import twoPeopleImg from "../assets/twoPeople.png";
import threeCircleImg from "../assets/threeCircle.png";
import "../NameForm.css";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleError = this.handleError.bind(this);
    }
    handleError(event) {
        var item = "";
        if (!this.props.firstName) {
            item += "First Name";
        }
        if (!this.props.lastName) {
            if (item) {
                item += " & ";
            }
            item += "Last Name";
        }
        if (!this.props.email) {
            if (item) {
                item += " & ";
            }
            item += "Email";
        }
        var errorTxt = "Please enter: " + item;

        alert(errorTxt);

        event.preventDefault();
    }
    render() {
        const {
            firstName,
            lastName,
            handleFirstNameChange,
            handleLastNameChange,
            email,
            handleEmailChange,
            handleIsVisible,
        } = this.props;
        return (
            <div>
                <div className="NameFormBlock">
                    <form
                        className="FormItem LightFont"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <label>
                            <div className="Question">First Name:&nbsp;</div>
                            <input
                                className="TransparentInput LightFont"
                                type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </label>
                    </form>
                    <form
                        className="FormItem LightFont"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <label>
                            <div className="Question">Last Name:&nbsp;</div>
                            <input
                                className="TransparentInput LightFont"
                                type="text"
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </label>
                    </form>
                    <form
                        className="FormItem LightFont"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <label>
                            <div className="Question">Email:&nbsp;</div>
                            <input
                                style={{ width: "36vw" }}
                                className="TransparentInput LightFont"
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </label>
                    </form>
                </div>
                <img className="TwoPeopleImg" src={twoPeopleImg}></img>
                <img className="ThreeCircleImg" src={threeCircleImg}></img>
                <button
                    className="LightFont SubmitButton"
                    onClick={
                        this.props.firstName &&
                        this.props.lastName &&
                        this.props.email
                            ? this.props.handleIsVisible
                            : this.handleError
                    }
                >
                    Click to continue
                </button>
            </div>
        );
    }
}

export default NameForm;
