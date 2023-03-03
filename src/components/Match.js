import React, { Component } from "react";
import NameForm from "./NameForm";
import MusicForm from "./MusicForm";
import CuisineForm from "./CuisineForm";
import MovieForm from "./MovieForm";
import HobbyForm from "./HobbyForm";

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            selectedMusicList: [],
            selectedCuisineList: [],
            selectedMovieList: [],
            selectedHobbyList: [],
            showNameForm: false,
            showMusicForm: false,
            showCuisineForm: false,
            showMovieForm: false,
            showHobbyForm: true,
        };

        this.handleShowNameForm = this.handleShowNameForm.bind(this);
        this.handleShowMusicFormL = this.handleShowMusicFormL.bind(this);
        this.handleShowMusicFormR = this.handleShowMusicFormR.bind(this);
        this.handleShowCuisineFormL = this.handleShowCuisineFormL.bind(this);
        this.handleShowCuisineFormR = this.handleShowCuisineFormR.bind(this);
        this.handleShowMovieFormL = this.handleShowMovieFormL.bind(this);
        this.handleShowMovieFormR = this.handleShowMovieFormR.bind(this);
        this.handleShowHobbyFormL = this.handleShowHobbyFormL.bind(this);
        this.handleShowHobbyFormR = this.handleShowHobbyFormR.bind(this);

        this.setSelectedMusicList = this.setSelectedMusicList.bind(this);
        this.setSelectedCuisineList = this.setSelectedCuisineList.bind(this);
        this.setSelectedMovieList = this.setSelectedMovieList.bind(this);
        this.setSelectedHobbyList = this.setSelectedHobbyList.bind(this);

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShowNameForm() {
        this.setState({ showNameForm: false });
    }

    handleShowMusicFormL() {
        this.setState({ showMusicForm: false });
    }

    handleShowMusicFormR() {
        this.setState({ showMusicForm: false });
        this.setState({ showCuisineForm: true });
    }

    handleShowCuisineFormL() {
        this.setState({ showCuisineForm: false });
        this.setState({ showMusicForm: true });
    }

    handleShowCuisineFormR() {
        this.setState({ showCuisineForm: false });
    }

    handleShowMovieFormL() {
        this.setState({ showMovieForm: false });
    }

    handleShowMovieFormR() {
        this.setState({ showMovieForm: false });
    }

    handleShowHobbyFormL() {
        this.setState({ showHobbyForm: false });
    }

    handleShowHobbyFormR() {
        this.setState({ showHobbyForm: false });
    }

    setSelectedMusicList(list) {
        this.setState({ selectedMusicList: list }, function() {
            console.log(this.state.selectedMusicList);
        });
    }

    setSelectedCuisineList(list) {
        this.setState({ selectedCuisineList: list }, function() {
            console.log(this.state.selectedCuisineList);
        });
    }

    setSelectedMovieList(list) {
        this.setState({ selectedMovieList: list }, function() {
            console.log(this.state.selectedMovieList);
        });
    }

    setSelectedHobbyList(list) {
        this.setState({ selectedHobbyList: list }, function() {
            console.log(this.state.selectedHobbyList);
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
                            handleIsVisibleL={this.handleShowMusicFormL}
                            handleIsVisibleR={this.handleShowMusicFormR}
                            setSelectedMusicList={this.setSelectedMusicList}
                        ></MusicForm>
                    )}
                    {this.state.showCuisineForm && (
                        <CuisineForm
                            handleIsVisibleL={this.handleShowCuisineFormL}
                            handleIsVisibleR={this.handleShowCuisineFormR}
                            setSelectedCuisineList={this.setSelectedCuisineList}
                        ></CuisineForm>
                    )}
                    {this.state.showMovieForm && (
                        <MovieForm
                            handleIsVisibleL={this.handleShowMovieFormL}
                            handleIsVisibleR={this.handleShowMovieFormR}
                            setSelectedMovieList={this.setSelectedMovieList}
                        ></MovieForm>
                    )}
                    {this.state.showHobbyForm && (
                        <HobbyForm
                            handleIsVisibleL={this.handleShowHobbyFormL}
                            handleIsVisibleR={this.handleShowHobbyFormR}
                            setSelectedHobbyList={this.setSelectedHobbyList}
                        ></HobbyForm>
                    )}
                </div>
            </div>
        );
    }
}

export default Match;
