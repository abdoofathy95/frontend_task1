import React from 'react';
import axios from 'axios';
import TrackList from './components/TrackList';

export default class SingleArtist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`https://api.spotify.com/v1/artists/${id}`).then(response => {
      this.setState({artist: response.data});
    });
  }

  render() {
    if (this.state.artist == null) {
      return (
        <div>
        <h1>Loading</h1>
        </div>
      );
    }
    return (
      <div>
      {
        <TrackList id={this.props.match.params.id} type={"artist"} playTrack={this.props.playTrack}/>
      }
      </div>
    );
  }
}
