import React from 'react';
import axios from 'axios';
import AlbumList from './AlbumList'

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
    if(searchKeyword.length>0){
      axios.get("https://api.spotify.com/v1/search?type=album&q="+searchKeyword).then(response => {
        console.log(response);
        this.setState({albums: response.data.albums.items});
      });
    }else{
      alert("Please insert a name first");
    }

  }

  componentDidMount() {
    console.log("component Did Mount");

    console.log("get data");
  }

  render() {
    return (
      <div className="main-wrap">
        <h1 className="main-title">
          Search for albums
          <form
            className="search-form"
            onSubmit={this.searchVideos}>
            <input placeholder="Search..." ref="keyword" type="text"/>
          </form>
        </h1>
        <AlbumList albums={this.state.albums}/>
      </div>
    );
  }
}
