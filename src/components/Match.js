import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import NameForm from "./NameForm";
import MusicForm from "./MusicForm";
import CuisineForm from "./CuisineForm";
import MovieForm from "./MovieForm";
import HobbyForm from "./HobbyForm";
import FunForm from "./FunForm";
import CatDogForm from "./CatDogForm";
import PlaceForm from "./PlaceForm";
import DayForm from "./DayForm";

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // DATA TO SEND
            firstName: "",
            lastName: "",
            email: "",
            selectedCatDogList: [],
            selectedMusicList: [],
            selectedCuisineList: [],
            selectedPlaceList: [],
            selectedMovieList: [],
            selectedDayList: [],
            selectedHobbyList: [],
            languages: "",
            classes: "",
            selectedSpacesTabs: [],
            twoSums: "",
            ///////////////////

            redirect: false,

            showForm: [
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ],
        };

        this.handleShowNameForm = this.handleShowNameForm.bind(this);

        this.handleShowFormL = this.handleShowFormL.bind(this);
        this.handleShowFormR = this.handleShowFormR.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.setSelectedCatDogList = this.setSelectedCatDogList.bind(this);
        this.setSelectedMusicList = this.setSelectedMusicList.bind(this);
        this.setSelectedCuisineList = this.setSelectedCuisineList.bind(this);
        this.setSelectedPlaceList = this.setSelectedPlaceList.bind(this);
        this.setSelectedMovieList = this.setSelectedMovieList.bind(this);
        this.setSelectedDayList = this.setSelectedDayList.bind(this);
        this.setSelectedHobbyList = this.setSelectedHobbyList.bind(this);
        this.setSelectedSpacesTabs = this.setSelectedSpacesTabs.bind(this);
    }

    // API call to be added!! FLASK
    handleFormSubmit() {
        console.log("TEST::");
        console.log(this.state);

        // ADD API CALL to pass state

        this.setState({ redirect: true });
    }

    handleShowNameForm() {
        this.setState({
            showForm: [
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ],
        });
    }

    handleShowFormL(index) {
        const updatedShow = this.state.showForm.map((isShown, i) => {
            if (i === index - 1) {
                return true;
            } else if (i === index) {
                return false;
            } else {
                return isShown;
            }
        });
        console.log(updatedShow);
        this.setState({ showForm: updatedShow });
    }

    handleShowFormR(index) {
        const updatedShow = this.state.showForm.map((isShown, i) => {
            if (i === index + 1) {
                return true;
            } else if (i === index) {
                return false;
            } else {
                return isShown;
            }
        });
        this.setState({ showForm: updatedShow });
    }

    setSelectedCatDogList(list) {
        this.setState({ selectedCatDogList: list }, function() {
            console.log(this.state.selectedCatDogList);
        });
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

    setSelectedPlaceList(list) {
        this.setState({ selectedPlaceList: list }, function() {
            console.log(this.state.selectedPlaceList);
        });
    }

    setSelectedMovieList(list) {
        this.setState({ selectedMovieList: list }, function() {
            console.log(this.state.selectedMovieList);
        });
    }

    setSelectedDayList(list) {
        this.setState({ selectedDayList: list }, function() {
            console.log(this.state.selectedDayList);
        });
    }

    setSelectedHobbyList(list) {
        this.setState({ selectedHobbyList: list }, function() {
            console.log(this.state.selectedHobbyList);
        });
    }

    setSelectedSpacesTabs(list) {
        this.setState({ selectedSpacesTabs: list }, function() {
            console.log(this.state.selectedSpacesTabs);
        });
        return true;
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

    changeLanguages = (event) => {
        this.setState({
            languages: event.target.value,
        });
    };

    changeClasses = (event) => {
        this.setState({
            classes: event.target.value,
        });
    };

    changeTwoSums = (event) => {
        this.setState({
            twoSums: event.target.value,
        });
    };

    render() {
        if (this.state.redirect) {
            return <Navigate push to="/finished" />;
        } else {
            return (
                <div className="homepage App">
                    <h2 className="Title">CIT CONNECT</h2>
                    <div className="Content">
                        {this.state.showForm[0] && (
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
                        {this.state.showForm[1] && (
                            <CatDogForm
                                num={1}
                                handleIsVisibleL={this.handleShowFormL}
                                handleIsVisibleR={this.handleShowFormR}
                                setSelectedCatDogList={
                                    this.setSelectedCatDogList
                                }
                            ></CatDogForm>
                        )}
                        {this.state.showForm[2] && (
                            <MusicForm
                                num={2}
                                handleIsVisibleL={this.handleShowFormL}
                                handleIsVisibleR={this.handleShowFormR}
                                setSelectedMusicList={this.setSelectedMusicList}
                            ></MusicForm>
                        )}
                        {this.state.showForm[3] && (
                            <CuisineForm
                                num={3}
                                handleIsVisibleL={this.handleShowFormL}
                                handleIsVisibleR={this.handleShowFormR}
                                setSelectedCuisineList={
                                    this.setSelectedCuisineList
                                }
                            ></CuisineForm>
                        )}

                        {this.state.showForm[4] && (
                            <PlaceForm
                                num={4}
                                handleIsVisibleL={this.handleShowFormL}
                                handleIsVisibleR={this.handleShowFormR}
                                setSelectedPlaceList={this.setSelectedPlaceList}
                            ></PlaceForm>
                        )}
                        {this.state.showForm[5] && (
                            <MovieForm
                                num={5}
                                handleIsVisibleL={this.handleShowFormL}
                                handleIsVisibleR={this.handleShowFormR}
                                setSelectedMovieList={this.setSelectedMovieList}
                            ></MovieForm>
                        )}

                        {this.state.showForm[6] && (
                            <DayForm
                                num={6}
                                handleIsVisibleL={this.handleShowFormL}
                                handleIsVisibleR={this.handleShowFormR}
                                setSelectedDayList={this.setSelectedDayList}
                            ></DayForm>
                        )}
                        {this.state.showForm[7] && (
                            <HobbyForm
                                num={7}
                                handleIsVisibleL={this.handleShowFormL}
                                handleIsVisibleR={this.handleShowFormR}
                                setSelectedHobbyList={this.setSelectedHobbyList}
                            ></HobbyForm>
                        )}
                        {this.state.showForm[8] && (
                            <FunForm
                                num={8}
                                languages={this.state.languages}
                                classes={this.state.classes}
                                twoSums={this.state.twoSums}
                                handleLanguagesChange={this.changeLanguages}
                                handleClassesChange={this.changeClasses}
                                handleTwoSumsChange={this.changeTwoSums}
                                setSelectedSpacesTabs={
                                    this.setSelectedSpacesTabs
                                }
                                handleFormSubmit={this.handleFormSubmit}
                            ></FunForm>
                        )}
                    </div>
                </div>
            );
        }
    }
}

export default Match;
