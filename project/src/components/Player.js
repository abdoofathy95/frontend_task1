import React from 'react';
import ReactPlayer from 'react-player';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      played: 0
    }
    this.togglePlay = this.togglePlay.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
  }

  togglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handleProgress(played){
    //access in stateVar
    this.setState({played: played.played});
  }

  render() {
    if (!this.props.current) {
      return null;
    }
    return (
      <div className="player">
      <div>
      {
        <h5>{this.props.current.name}</h5>
    }
      <div>
        <div style={{width: 0}}></div>
      </div>
      {this.state.playing && "Playing"}
      <button onClick={this.togglePlay}>
        {this.state.playing ? "Pause" : "Play"}
      </button>
      {
        <ReactPlayer onProgress={this.handleProgress} url={this.props.current.preview_url} hidden playing={this.state.playing}/>
    }
      </div>
        Player component
      </div>
    );
  }
}
