import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from '../../public/logo.svg';
import './css/basic.css';
import './css/App.css';
import '../lib/font-awesome-4.7.0/css/font-awesome.css';
import Home from './Home'
import Navigation from './Navigation'
import SearchArtists from './SearchArtists'
import SingleArtist from './SingleArtist'
import SearchAlbums from './SearchAlbums'
import SingleAlbum from './SingleAlbum'
import Player from './Player'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      queue: [],
      currentIndex: null
    };

    this.playTrack = this.playTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
  }

  playTrack(tracks, index) {
    this.setState({queue: tracks, currentIndex: index})
  }

  nextTrack() {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    });
  }

  render() {
    let id = "";
    if (this.state.queue[this.state.currentIndex]) {
      id = this.state.queue[this.state.currentIndex].id;
    }
    return (
      <BrowserRouter>
        <div>
          <Navigation playTrack={this.playTrack} trackId={id}/>
          <Player nextTrack={this.nextTrack} current={this.state.queue[this.state.currentIndex]}/>
        </div>
      </BrowserRouter>
    );
  }
}
