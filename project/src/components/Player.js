import React from 'react';
import ReactPlayer from 'react-player';
import './css/Player.css';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      played: 0,
      track: null
    }
    this.togglePlay = this.togglePlay.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
  }

  togglePlay() {
    this.setState({playing: !this.state.playing});
  }

  handleProgress(played) {
    this.setState({played: played.played});
  }

  render() {
    if (!this.props.current) {
      return null;
    }

    if (!this.props.current.preview_url) {
      return (
        <div className="player">
          <div className="player-content">
            <div className="player-track">
              <div className="player-content__details">
                <h6>Track is not playable</h6>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.track === null || this.state.track != this.props.current.id) {
      this.state.playing = true;
      this.state.played = 0;
      this.state.track = this.props.current.id;

      console.log(this.props.current);
    }

    let image = "";
    if (this.props.current.album && this.props.current.album.images) {
      image = this.props.current.album.images[0].url;
    }

    return (
      <div className="player">
        <div className="player-content">
          <div className="player-track">
            <div className="track-image-container">
              <div className="player-content__image"  style={{backgroundImage: `url(${image})`}}></div>
            </div>
            <div className="player-content__details">
              <h6>{this.props.current.name}</h6>
              <h6>{this.props.current.artists[0].name}</h6>
            </div>
          </div>
          <div className="player-controls">
            <div className="player-controls__buttons">
              <i className={`${this.state.playing ? 'fa fa-pause' : 'fa fa-play'} player-controls__button`} aria-hidden="true" onClick={this.togglePlay}></i>
            </div>
            <div className="player-controls__progress">
              <div className="progress__time progress__time--start">0</div>
              <div className="progress__time progress__time--end">30</div>
              <div className="progress-bar">
                <div className="progress-bar__status" style={{width: `${this.state.played * 100}%`}}></div>
              </div>
            </div>
          </div>
          <ReactPlayer onProgress={this.handleProgress} url={this.props.current.preview_url} hidden playing={this.state.playing} onEnded={this.togglePlay}/>
        </div>
      </div>
    );
  }
}
