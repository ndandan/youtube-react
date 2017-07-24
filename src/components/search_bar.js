import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}
    }
    render() {
        return (
            <div className="search-bar center-block">
                    <img src="https://developers.google.com/youtube/images/YouTube-logo-light.png" alt="youtube logo" width="25%" height="25%" />
                    <input
                        className="input-lg"
                        value={this.state.term}
                        onChange={(event)=> this.onInputChange(event.target.value)} />           
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;