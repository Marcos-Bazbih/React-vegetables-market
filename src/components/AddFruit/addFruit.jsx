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

    updateFruitName(event) {
        this.state.fruitName = event.target.value;
    }
    addItemToList() {
        this.state.fruitsArray.push(this.state.fruitName);
        this.setState({ fruitName: this.state.fruitName });
    }

    render() {
        return (
            <section className="item-container">
                <article className="add-item-card">
                    <h1 className="add-item-h1">Add fruit</h1>
                    <input className="add-item-input" maxLength={15} type="text" onChange={this.updateFruitName} />
                    <button className="add-item-btn" onClick={this.addItemToList}>Add To List</button>
                    <p className="add-item-p">{this.state.fruitName}</p>
                </article>
                <article className="list-card">
                    <ul id="fruitsList">
                        {
                            this.state.fruitsArray.map(item => <li className="list-li">{item}</li>)
                        }
                    </ul>
                </article>
            </section>
        )
    }
}

export default AddFruit;