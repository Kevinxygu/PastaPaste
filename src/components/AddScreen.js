import React from "react";
import "./AddScreen.css";

class AddScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleChooseCreate = this.handleChooseCreate.bind(this);
        this.handleChooseGenerate = this.handleChooseGenerate.bind(this);
        this.handleReturnToChoose = this.handleReturnToChoose.bind(this);
        this.handleReturnToHome = this.handleReturnToHome.bind(this);
        this.state = {screenState: "choose-screen"};
    }

    handleChooseCreate() {
        this.setState({screenState: "create-screen"});
    }

    handleChooseGenerate() {
        this.setState({screenState: "generate-screen"});
    }

    handleReturnToChoose() {
        this.setState({screenState: "choose-screen"});
    }

    handleReturnToHome() {
        console.log("Hello world!"); // Replace this with the function to add something to JSON
        this.props.returnHomeHandler();
    }

    
    render() {
        let screenState = this.state.screenState;

        const chooseScreenToRender = (
            <div class="choose-screen">
                <h2 class="top-title">Add New</h2>
                <p class="description">Would you like to generate filler text or create your own text chunk?</p>
                <button class="addnew-button generate" onClick={this.handleChooseGenerate}>Generate</button>
                <button class="addnew-button create" onClick={this.handleChooseCreate}>Create</button>
                <div class="choose-screen-buffer"></div>
            </div>
        )

        const createScreenToRender = (
            <div class="create-screen">
                <input type="text" name="create-title" placeholder="Title" class="title-input" maxlength="30"></input>
                <textarea class="create-textarea" placeholder="Type something you'd like to keep copying and pasting!"></textarea>
                <button class="add-new-button" onClick={this.handleReturnToHome}>Add</button>
                <h2 class="change-mode" onClick={this.handleChooseGenerate}>Generate instead</h2>
                <div class="create-screen-buffer"></div>
            </div>
        )

        const generateScreenToRender = (
            <div class="generate-screen">
                <input type="text" name="generate-title" placeholder="Title" class="title-input" maxlength="30"></input>
                <p class="sub-heading">Generate: </p>
                <div class="generate-panel">
                    <input type="number" name="generate-number" class="number-input" min="1"></input>
                    <select name="generate-type" class="generate-type">
                        <option value="words">words</option>
                        <option value="characters">characters</option>
                        <option value="paragraphs">paragraphs</option>
                    </select>
                </div>

                <div class="case-panel">
                    <input type="radio" id="original" name="case-select" value="original" class="case-button"></input>
                    <label for="original" class="case-label">Keep original</label>
                    <br></br>

                    <input type="radio" id="upper" name="case-select" value="upper" class="case-button"></input>
                    <label for="upper" class="case-label">All uppercase</label>
                    <br></br>

                    <input type="radio" id="lower" name="case-select" value="lower" class="case-button"></input>
                    <label for="lower" class="case-label">All lowercase</label>
                </div>

                <button class="add-new-button" onClick={this.handleReturnToHome}>Add</button>
                <h2 class="change-mode" onClick={this.handleChooseCreate}>Create instead</h2>
                <div class="generate-buffer"></div>
                
            </div>
        )

        switch (screenState) {
            case "choose-screen":
                return chooseScreenToRender;
                break;
            case "generate-screen":
                return generateScreenToRender;
                break;
            case "create-screen":
                return createScreenToRender;
                break;
        }
    }
}

// <button onClick={ this.props.returnHomeHandler }>Hi</button> add this to return to home screen

export default AddScreen;