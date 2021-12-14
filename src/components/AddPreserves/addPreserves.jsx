import React from "react";
import "./addPreserves.css";

class AddPreserves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preservesName: "",
            preservesArray: []
        };
        this.updatePreservesName = this.updatePreservesName.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }

    updatePreservesName() {
        this.setState({ preservesName: document.getElementById("preservesInput").value });
    }
    addItemToList() {
        document.getElementById("preservesList").innerHTML +=
            `<li class="list-li">${this.state.preservesName}</li>`
    }

    render() {
        return (
            <section className="item-container">
                <article className="add-item-card">
                    <h1 className="add-item-h1">Add preserves</h1>
                    <input className="add-item-input" maxLength={15} id="preservesInput" type="text" onChange={this.updatePreservesName} />
                    <button className="add-item-btn" onClick={this.addItemToList}>Add To List</button>
                    <p className="add-item-p">{this.state.preservesName}</p>
                </article>
                <article className="list-card">
                    <ul id="preservesList"></ul>
                </article>
            </section>
        )
    }
}

export default AddPreserves;