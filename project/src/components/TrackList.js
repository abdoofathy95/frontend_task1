import React, {Component} from 'react';
import axios from 'axios';
import './css/TrackList.css';

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: null,
      error: false
    };
  }

  componentDidMount() {
    const id = this.props.id;
    const type = this.props.type;
    let url = "";
    switch (type) {
      case "artist":
        url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`;
        break;
      case "album":
        url = `https://api.spotify.com/v1/albums/${id}/tracks`;
        break;
      default:
      break;
    }
    axios.get(url).then(response => {
      if (response.data.items) {
        this.setState({tracks: response.data.items});
      } else {
        this.setState({tracks: response.data.tracks});
      }
    }).catch(error => {
      this.setState({error: true});
    });
  }

  render() {
    if (this.state.error === true) {
      return (
        <div>
        <h4>Could not get track list for {`'${this.props.id}'`} of type {`'${this.props.type}'`} </h4>
        </div>
      );
    }

    const tracks = this.state.tracks;
    if (tracks == null) {
      return (
        <div>
        <h4>Loading tracks</h4>
        </div>
      );
    }

    if (tracks.length == 0) {
      return (
        <div>
        <h4>No tracks to show</h4>
        </div>
      );
    }

    return(
      <div>
        <table className="track-list">
          <tbody>
          {tracks.map((track,i) => (
            <tr className="track-list__item" key={i} style={{color: `${this.props.trackId == track.id ? 'green' : 'white'}`}} onClick={() => this.props.playTrack(tracks, i)}>
              <td className="track-list__cell">{`${i + 1}.`}</td>
              <td className="track-list__cell">{ track.name }</td>
              <td className="track-list__cell">{ track.duration_ms }</td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default TrackList;
