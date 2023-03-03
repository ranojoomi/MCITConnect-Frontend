import React, { Component } from "react";
import NameForm from "./NameForm";
import MusicForm from "./MusicForm";

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            selectedMusicList: [],
            showNameForm: false,
            showMusicForm: true,
        };

        this.handleShowNameForm = this.handleShowNameForm.bind(this);
        this.handleShowMusicForm = this.handleShowMusicForm.bind(this);
        this.setSelectedMusicList = this.setSelectedMusicList.bind(this);

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShowNameForm() {
        this.setState({ showNameForm: false });
    }

    handleShowMusicForm() {
        this.setState({ showMusicForm: false });
    }

    setSelectedMusicList(list) {
        this.setState({ selectedMusicList: list }, function() {
            console.log(this.state.selectedMusicList);
        });
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
                    {this.state.showNameForm && (
                        <NameForm
                            firstName={this.state.firstName}
                            handleFirstNameChange={this.changeFirstName}
                            lastName={this.state.lastName}
                            handleLastNameChange={this.changeLastName}
                            email={this.state.email}
                            handleEmailChange={this.changeEmail}
                            handleIsVisible={this.handleShowNameForm}
                        ></NameForm>
                    )}
                    {this.state.showMusicForm && (
                        <MusicForm
                            handleIsVisible={this.handleShowMusicForm}
                            setSelectedMusicList={this.setSelectedMusicList}
                        ></MusicForm>
                    )}
                </div>
            </div>
        );
    }
}

export default Match;
