import React, {Component} from 'react';
var FontAwesome = require('react-fontawesome');
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './mainToBeChanged.css';
import './lib/font-awesome-4.7.0/css/font-awesome.css';

import Home from './Home'
import SearchArtists from './SearchArtists'
import SingleArtist from './SingleArtist'
import SearchAlbums from './SearchAlbums'
import SingleAlbum from './SingleAlbum'
import Player from './Player'


/*let counter = 0;
setInterval(function(){
  console.log(counter);
  counter++;
})*/

/*axios.get(API_URL, {params: params}).then(response => {
    this.setState({stateVar: response.data});
});*/

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
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
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
                  <i className="fa fa-user-o" aria-hidden="true"></i> Ahmed Wagdi
                </a>
              </nav>
              <div className="main-content">
                  <Route exact path="/" component={Home}/>
                  <Route path="/artists" component={SearchArtists}/>
                  <Route path="/artist/:id?" render={(routeProps) => <SingleArtist playTrack={this.playTrack} { ... routeProps }/>}/>
                  <Route path="/albums" component={SearchAlbums}/>
                  <Route path="/album/:id?" render={SingleAlbum}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
