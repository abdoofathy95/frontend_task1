import React from 'react';
import axios from 'axios';
import ArtistList from './ArtistList'
import './css/Search.css'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    axios.get("https://api.spotify.com/v1/search?type=artist&q=amr").then(response => {
      this.setState({artists: response.data.artists.items});
    });
  }

  render() {
    return (
        <div className="main_container">
          <h1 className="title">
            Top Artists
          </h1>
          <ArtistList artists={this.state.artists}/>
        </div>
    );
  }
}
