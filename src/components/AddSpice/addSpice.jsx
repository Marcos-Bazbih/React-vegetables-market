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

    updateSpiceName() {
        this.setState({ spiceName: document.getElementById("spiceInput").value });
    }
    addItemToList() {
        document.getElementById("spicesList").innerHTML +=
            `<li>${this.state.spiceName}</li>`
    }

    render() {
        return (
            <section className="item-container">
                <article className="add-item-card">
                    <h1 className="add-item-h1">Add spice</h1>
                    <input className="add-item-input" id="spiceInput" type="text" onChange={this.updateSpiceName} />
                    <button className="add-item-btn" onClick={this.addItemToList}>Click</button>
                    <p className="add-item-p">{this.state.spiceName}</p>
                </article>
                <article className="list-card">
                    <ul id="spicesList"></ul>
                </article>
            </section>
        )
    }
}

export default AddSpice;