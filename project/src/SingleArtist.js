import React from 'react';
import axios from 'axios';
import AlbumList from './AlbumList';
import TrackList from './components/TrackList';

export default class SingleArtist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: {},
            albums: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://api.spotify.com/v1/artists/${id}`).then(response => {
            this.setState({artist: response.data});
        });
        axios.get(`https://api.spotify.com/v1/artists/${id}/albums`).then(response => {
            this.setState({albums: response.data.items});
        });
    }

    render() {
        //<TrackList tracks={this.state.tracks} playTrack={this.props.playTrack}/>
        return (
            <div>
              <div className="artist">
                <div
                  className="artist__image"
                  style={{backgroundImage: `url(${(this.state.artist.images!=null && this.state.artist.images.length>0)?this.state.artist.images[1].url:''})`}}>
                  <div className="artist__details">
                    <p className="artist__followers">
                      {(this.state.artist.followers!=null)?this.state.artist.followers.total:''} Followers
                    </p>
                    <h1 className="artist__title">
                      {(this.state.artist.name!=null)?this.state.artist.name:''}
                    </h1>
                    <a className="button">Follow</a>
                    <a className="button button--transparent">
                      Play All
                    </a>
                  </div>
                </div>
              </div>
              <div className="artist-content">
                <h2 className="section-title">
                  Top Tracks
                </h2>
                <TrackList id={this.props.match.params.id} type={"artist"} trackId={this.props.trackId} playTrack={this.props.playTrack}/>
              </div>
              <div className="artist-albums">
                <h2 className="section-title">Albums</h2>
                <AlbumList albums={this.state.albums}/>
              </div>
            </div>

        );
    }
  }
