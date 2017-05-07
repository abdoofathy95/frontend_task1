import React from 'react';
import axios from 'axios';
import ArtistList from './ArtistList'
import './css/Search.css'

export default class SearchArtists extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: []
    }

    this.searchVideos = this.searchVideos.bind(this);
  }

  searchVideos(event) {
    event.preventDefault();
    let searchKeyword = this.refs.keyword.value;
    if (searchKeyword.length > 0) {
      axios.get("https://api.spotify.com/v1/search?type=artist&q=" + searchKeyword).then(response => {
        this.setState({artists: response.data.artists.items});
      });
    } else {
      alert("Please insert a name first");
    }

  }

  render() {
    return (
      <div className="main_container">
        <h1 className="title">
          Search for artists
        </h1>
        <form className="search_input" onSubmit={this.searchVideos}>
          <input placeholder="Search..." ref="keyword" type="text"/>
        </form>
        <ArtistList artists={this.state.artists}/>

      </div>
    );
  }
}
