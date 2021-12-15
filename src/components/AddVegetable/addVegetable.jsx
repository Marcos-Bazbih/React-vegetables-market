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

    updateVegetableName(event) {
        this.state.vegetableName = event.target.value;
    }
    addItemToList() {
        this.state.vegetablesArray.push(this.state.vegetableName);
        this.setState({ vegetableName: this.state.vegetableName });
    }

    render() {
        return (
            <section className="item-container">
                <article className="add-item-card">
                    <h1 className="add-item-h1">Add vegetable</h1>
                    <input className="add-item-input" maxLength={15} type="text" onChange={this.updateVegetableName} />
                    <button className="add-item-btn" onClick={this.addItemToList}>Add To List</button>
                    <p className="add-item-p">{this.state.vegetableName}</p>
                </article>
                <article className="list-card">
                    <ul id="vegetablesList">
                        {
                            this.state.vegetablesArray.map( item => <li className="list-li">{item}</li> )
                        }
                    </ul>
                </article>
            </section>
        )
    }
}

export default AddVegetable;