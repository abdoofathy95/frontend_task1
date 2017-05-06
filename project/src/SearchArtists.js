import React from 'react';
import axios from 'axios';
import ArtistList from './ArtistList'

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
    if(searchKeyword.length>0){
      axios.get("https://api.spotify.com/v1/search?type=artist&q="+searchKeyword).then(response => {
        console.log(response);
        this.setState({artists: response.data.artists.items});
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
          Search for artists
          <form
            className="search-form"
            onSubmit={this.searchVideos}>
            <input placeholder="Search..." ref="keyword" type="text"/>
          </form>
        </h1>
        <ArtistList artists={this.state.artists}/>
      </div>
    );
  }
}
