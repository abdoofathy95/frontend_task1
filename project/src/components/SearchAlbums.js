import React from 'react';
import axios from 'axios';
import AlbumList from './AlbumList'
import './css/Search.css'

export default class SearchAlbums extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }

    this.searchVideos = this.searchVideos.bind(this);
  }

  searchVideos(event) {
    event.preventDefault();
    let searchKeyword = this.refs.keyword.value;
    if (searchKeyword.length > 0) {
      axios.get("https://api.spotify.com/v1/search?type=album&q=" + searchKeyword).then(response => {
        this.setState({albums: response.data.albums.items});
      });
    } else {
      alert("Please insert a name first");
    }

  }

  render() {
    return (
      <div className="main_container">
        <h1 className="title">
          Search for albums
        </h1>
        <form className="search_input" onSubmit={this.searchVideos}>
          <input placeholder="Search..." ref="keyword" type="text"/>
        </form>
        <AlbumList albums={this.state.albums}/>
      </div>
    );
  }
}
