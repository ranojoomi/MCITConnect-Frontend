import React, { Component } from "react";
import "../MusicForm.css";

class MusicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                "Pop",
                "Classical",
                "Hip Hop",
                "EDM",
                "Jazz",
                "Rock",
                "Rock",
            ],
            selectedOptions: [false, false, false, false, false, false, false],
        };

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection() {
        var list = [];
        for (var i = 0; i < this.state.selectedOptions.length; i++) {
            if (this.state.selectedOptions[i]) {
                list.push(this.state.options[i]);
            }
        }

        this.props.setSelectedMusicList(list);
    }

    handleSelectionChange(index) {
        const updatedSelection = this.state.selectedOptions.map(
            (isSelected, i) => {
                if (i === index) {
                    return !isSelected;
                } else {
                    return isSelected;
                }
            }
        );
        this.setState({ selectedOptions: updatedSelection });
    }

    render() {
        const { setSelectedMusicList, handleIsVisible } = this.props;
        return (
            <div>
                <div>
                    <h2 className="SemiBoldFont Question">
                        Favorite Music Genre
                    </h2>
                </div>

                <div className="SelectionGroup">
                    <div className="Column">
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? "SelectedButton"
                                    : "UnselectedButton"
                            }
                            onClick={() => this.handleSelectionChange(0)}
                        >
                            <text>Pop</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? "SelectedButton"
                                    : "UnselectedButton"
                            }
                            onClick={() => this.handleSelectionChange(1)}
                        >
                            <text>Classical</text>
                        </div>
                    </div>
                    <div className="Column">
                        <div
                            className={
                                this.state.selectedOptions[2]
                                    ? "SelectedButton"
                                    : "UnselectedButton"
                            }
                            onClick={() => this.handleSelectionChange(2)}
                        >
                            <text>Hip Hop</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[3]
                                    ? "SelectedButton"
                                    : "UnselectedButton"
                            }
                            onClick={() => this.handleSelectionChange(3)}
                        >
                            <text>EDM</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[4]
                                    ? "SelectedButton"
                                    : "UnselectedButton"
                            }
                            onClick={() => this.handleSelectionChange(4)}
                        >
                            <text>Jazz</text>
                        </div>
                    </div>
                    <div className="Column">
                        <div
                            className={
                                this.state.selectedOptions[5]
                                    ? "SelectedButton"
                                    : "UnselectedButton"
                            }
                            onClick={() => this.handleSelectionChange(5)}
                        >
                            <text>Rock</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[6]
                                    ? "SelectedButton"
                                    : "UnselectedButton"
                            }
                            onClick={() => this.handleSelectionChange(6)}
                        >
                            <text>Country</text>
                        </div>
                    </div>
                </div>

                <button
                    className="LightFont SubmitButton"
                    onClick={() => {
                        this.updateSelection();
                        this.props.handleIsVisible();
                    }}
                >
                    Click to continue
                </button>
            </div>
        );
    }
}

export default MusicForm;
