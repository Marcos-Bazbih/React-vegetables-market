import React from "react";
import "./addVegetable.css";
    
class AddVegetable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vegetableName: "",
            vegetablesArray: []
        };
        this.updateVegetableName = this.updateVegetableName.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }

    updateVegetableName() {
        this.setState({ vegetableName: document.getElementById("vegetableInput").value });
    }
    addItemToList() {
        document.getElementById("vegetablesList").innerHTML +=
            `<li>${this.state.vegetableName}</li>`
    }

    render() {
        return (
            <section className="item-container">
                <article className="add-item-card">
                    <h1 className="add-item-h1">Add vegetable</h1>
                    <input className="add-item-input" id="vegetableInput" type="text" onChange={this.updateVegetableName} />
                    <button className="add-item-btn" onClick={this.addItemToList}>Click</button>
                    <p className="add-item-p">{this.state.vegetableName}</p>
                </article>
                <article className="list-card">
                    <ul id="vegetablesList"></ul>
                </article>
            </section>
        )
    }
}

export default AddVegetable;