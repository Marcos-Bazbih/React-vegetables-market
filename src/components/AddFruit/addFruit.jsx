import React from "react";
import "./addFruit.css";

class AddFruit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitName: "",
            fruitsArray: []
        };
        this.updateFruitName = this.updateFruitName.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }

    updateFruitName() {
        this.setState({ fruitName: document.getElementById("fruitInput").value });
    }
    addItemToList() {
        document.getElementById("fruitsList").innerHTML +=
            `<li>${this.state.fruitName}</li>`
    }

    render() {
        return (
            <section className="item-container">
                <article className="add-item-card">
                    <h1 className="add-item-h1">Add fruit</h1>
                    <input className="add-item-input" id="fruitInput" type="text" onChange={this.updateFruitName} />
                    <button className="add-item-btn" onClick={this.addItemToList}>Click</button>
                    <p className="add-item-p">{this.state.fruitName}</p>
                </article>
                <article className="list-card">
                    <ul id="fruitsList"></ul>
                </article>
            </section>
        )
    }
}

export default AddFruit;