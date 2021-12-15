import React from "react";
import "./addSpice.css"

class AddSpice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spiceName: "",
            spicesArray: []
        };
        this.updateSpiceName = this.updateSpiceName.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }

    updateSpiceName(event) {
        this.state.spiceName = event.target.value;
    }
    addItemToList() {
        this.state.spicesArray.push(this.state.spiceName);
        this.setState({ spiceName: this.state.spiceName });
    }

    render() {
        return (
            <section className="item-container">
                <article className="add-item-card">
                    <h1 className="add-item-h1">Add spice</h1>
                    <input className="add-item-input" maxLength={15} type="text" onChange={this.updateSpiceName} />
                    <button className="add-item-btn" onClick={this.addItemToList}>Add To List</button>
                    <p className="add-item-p">{this.state.spiceName}</p>
                </article>
                <article className="list-card">
                    <ul id="spicesList">
                        {
                            this.state.spicesArray.map(item => <li className="list-li">{item}</li>)
                        }
                    </ul>
                </article>
            </section>
        )
    }
}

export default AddSpice;