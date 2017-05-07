import React from 'react';
import axios from 'axios';
import TrackList from './components/TrackList';

export default class SingleAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        //console.log("compononent Did Mount");
        axios.get(`https://api.spotify.com/v1/artists/${id}`).then(response => {
            console.log(response);
            this.setState({artist: response.data});
        });
        console.log("get data");
    }

    render() {
        console.log(this);
        return (
            <div>
                <TrackList tracks={this.state.tracks} playTrack={this.props.playTrack}/>
            </div>
        );
    }
}
