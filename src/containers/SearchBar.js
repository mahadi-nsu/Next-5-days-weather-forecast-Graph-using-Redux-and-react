import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ' '
        };


    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Get a Five day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}
