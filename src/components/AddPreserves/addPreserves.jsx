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

    updatePreservesName(event) {
        this.state.preservesName = event.target.value;
    }
    addItemToList() {
        this.state.preservesArray.push(this.state.preservesName);
        this.setState({ preservesName: this.state.preservesName });
    }

    render() {
        return (
            <section className="item-container">
                <article className="add-item-card">
                    <h1 className="add-item-h1">Add preserves</h1>
                    <input className="add-item-input" maxLength={15} type="text" onChange={this.updatePreservesName} />
                    <button className="add-item-btn" onClick={this.addItemToList}>Add To List</button>
                    <p className="add-item-p">{this.state.preservesName}</p>
                </article>
                <article className="list-card">
                    <ul id="preservesList">
                        {
                            this.state.preservesArray.map(item => <li className="list-li">{item}</li>)
                        }
                    </ul>
                </article>
            </section>
        )
    }
}

export default AddPreserves;