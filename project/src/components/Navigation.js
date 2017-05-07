import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from '../../public/logo.svg';
import './css/App.css';
import '../lib/font-awesome-4.7.0/css/font-awesome.css';
import Home from './Home'
import SearchArtists from './SearchArtists'
import SingleArtist from './SingleArtist'
import SearchAlbums from './SearchAlbums'
import SingleAlbum from './SingleAlbum'
import Player from './Player'

export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: 0
    };
  }

  render(){
    return(
      <div className="main_container_outer">
        <nav className="left_side">
          <div>
            <img className="logo" src="logo.png" alt=""/>
            <ul className="main_menu_navigation">
              <li onClick={()=>{this.setState({active: 0})}} style={{opacity: ((this.state.active == 0)?1.0:false)}} className="link">
                <Link to="/">Home</Link>
              </li>
              <li onClick={()=>{this.setState({active: 1})}} style={{opacity: (this.state.active == 1)?1.0:false}} className="link">
                <Link to="/albums">Albums</Link>
              </li>
              <li onClick={()=>{this.setState({active: 2})}} style={{opacity: (this.state.active == 2)?1.0:false}} className="link">
                <Link to="/artists">Artists</Link>
              </li>
            </ul>
          </div>
          <a href="">
            <p><i className="left_side_user fa fa-user-o" aria-hidden="true"></i>  Ahmed Wagdi</p>
          </a>
        </nav>
        <div className="main_content">
          <Route exact path="/" component={Home}/>
          <Route path="/artists" component={SearchArtists}/>
          <Route path="/artist/:id?" render={(routeProps) => <SingleArtist playTrack={this.props.playTrack} trackId={this.props.trackId} { ... routeProps }/>}/>
          <Route path="/albums" component={SearchAlbums}/>
          <Route path="/album/:id?" render={(routeProps) => <SingleAlbum playTrack={this.props.playTrack} trackId={this.props.trackId} { ... routeProps }/>}/>
        </div>
      </div>
    )
  }
}
