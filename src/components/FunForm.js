import React, { Component } from "react";
import FunStyles from "../FunForm.module.css";

class FunForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["spaces", "tabs"],
            selectedOptions: [false, false],
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

        this.props.setSelectedSpacesTabs(list);
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
        const {
            languages,
            classes,
            twoSums,
            setSelectedSpacesTabs,
            handleLanguagesChange,
            handleClassesChange,
            handleTwoSumsChange,
            handleIsVisible,
            handleFormSubmit,
        } = this.props;
        return (
            <div className={FunStyles.Content}>
                <div
                    className={`${FunStyles.Question1Block} ${FunStyles.RegularFont}`}
                >
                    <text>What is your favorite language and IDE?</text>
                    <form>
                        <label>
                            <input
                                className={`${FunStyles.TransparentInput} ${FunStyles.RegularFont}`}
                                type="text"
                                value={languages}
                                onChange={handleLanguagesChange}
                            />
                        </label>
                    </form>
                    <text>What is you favorite CIT class?</text>
                    <form>
                        <label>
                            <input
                                className={`${FunStyles.TransparentInput} ${FunStyles.RegularFont}`}
                                type="text"
                                value={classes}
                                onChange={handleClassesChange}
                            />
                        </label>
                    </form>
                    <div className={FunStyles.QRow}>
                        <text>Spaces or tabs?</text>
                        <div
                            className={
                                this.state.selectedOptions[0]
                                    ? `${FunStyles.SelectedButton}`
                                    : `${FunStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(0)}
                        >
                            <text>spaces</text>
                        </div>
                        <div
                            className={
                                this.state.selectedOptions[1]
                                    ? `${FunStyles.SelectedButton}`
                                    : `${FunStyles.UnselectedButton}`
                            }
                            onClick={() => this.handleSelectionChange(1)}
                        >
                            <text>tabs</text>
                        </div>
                    </div>

                    <div className={FunStyles.TwoSumsBlock}>
                        <div className={FunStyles.TwoSumsQ}>
                            Do this "Two Sums" Questions
                        </div>
                        <form>
                            <label>
                                <textarea
                                    className={`${FunStyles.TwoSumsA} ${FunStyles.RegularFont}`}
                                    type="textarea"
                                    value={twoSums}
                                    onChange={handleTwoSumsChange}
                                />
                            </label>
                        </form>
                    </div>

                    <button
                        className={FunStyles.SubmitButton}
                        onClick={() => {
                            const submit = async () => {
                                const result = await this.updateSelection();
                                this.props.handleFormSubmit();
                            };
                            submit();
                            this.props.handleIsVisible();
                        }}
                    ></button>
                </div>
            </div>
        );
    }
}

export default FunForm;