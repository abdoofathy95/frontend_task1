import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from '../../public/logo.svg';
import './css/mainToBeChanged.css';
import '../lib/font-awesome-4.7.0/css/font-awesome.css';
import Home from './Home'
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
                    <Navigation playTrack={ this.playTrack } trackId={id}/>
                    <Player nextTrack={this.nextTrack} current={this.state.queue[this.state.currentIndex]}/>
                </div>
            </BrowserRouter>
        );
    }
}

function Navigation(props) {
    return (
      <div>
        <div id="root">
          <div data-reactroot className="container">
            <div className="content-wrap">
              <nav className="sidebar">
                <div>
                  <img className="logo" src="logo.png" alt=""/>
                  <ul className="main-menu">
                    <li className="main-menu__item">
                      <Link className="active main-menu__link" to="/">Home</Link>
                    </li>
                    <li className="main-menu__item">
                      <Link className="active main-menu__link" to="/albums">Albums</Link>
                    </li>
                    <li className="main-menu__item">
                      <Link className="active main-menu__link" to="/artists">Artists</Link>
                    </li>
                  </ul>
                </div>
                <a className="sidebar__user">
                  <i className="fa fa-user-o" aria-hidden="true"></i> User
                </a>
              </nav>
              <div className="main-content">
                  <Route exact path="/" component={Home}/>
                  <Route path="/artists" component={SearchArtists}/>
                  <Route path="/artist/:id?" render={(routeProps) => <SingleArtist playTrack={props.playTrack} trackId={props.trackId} { ... routeProps }/>}/>
                  <Route path="/albums" component={SearchAlbums}/>

                  <Route path="/album/:id?" render={(routeProps) => <SingleAlbum playTrack={props.playTrack} trackId={props.trackId} { ... routeProps }/>}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
