import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TrackList from './TrackList';

export default class SingleAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            album: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://api.spotify.com/v1/albums/${id}`).then(response => {
            this.setState({album: response.data});
        });
    }

    render() {
        return (
            <div className="main-wrap album">
              <div className="album__side">
                <img
                  src={(this.state.album.images!=null && this.state.album.images.length>0)?this.state.album.images[0].url:''}
                  alt />
                <h1 className="album__title">
                  {this.state.album.label}
                  <div>{this.state.album.name}</div>
                </h1>
                <p className="album__total">
                  {(this.state.album.tracks!=null && this.state.album.tracks.items!=null)?this.state.album.tracks.items.length:''} tracks
                </p>
                <Link className="button" to={"/artist/" + ((this.state.album.artists!=null && this.state.album.artists.length>0)?this.state.album.artists[0].id:'')}>
                  Artist Profile
                </Link>
              </div>
              <div className="album__main">
              <TrackList id={this.props.match.params.id} type={"album"} trackId={this.props.trackId} playTrack={this.props.playTrack}/>
                <table className="tracklist">

                </table>
              </div>
            </div>

        );
    }
}
