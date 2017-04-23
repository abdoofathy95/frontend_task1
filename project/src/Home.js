import React from 'react';
import axios from 'axios';
import ArtistList from './ArtistList'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
    }

    compononentDidMount() {
        //console.log("compononent Did Mount");
        axios.get("https://api.spotify.com/v1/search?type=artist&q=a").then(response => {
            //console.log(response);
            this.setState({artists: response.data.artists.items});
        });
        console.log("get data");
    }

    render() {
        return (
            <div>
                <ArtistList artists={this.state.artists} />
            </div>
        );
    }
}
