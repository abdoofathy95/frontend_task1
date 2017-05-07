import React from 'react';
import {Link} from 'react-router-dom';
import './css/ItemList.css';

export default class ArtistList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.artists.length > 0) {
      return (
        <ul className="items">
          {this.props.artists.map((artist, i) =>
            <div
              className="item"
              key={i}>
              <Link to={`/artist/${artist.id}`}>
                <div
                  className="item_image"
                  style={{"backgroundImage": "url(" + (artist.images.length > 0 ? artist.images["0"].url: "") + ")"}}>
                </div>
                <h6 className="center_item">
                  {artist.name}
                </h6>
              </Link>
            </div>
          )}
        </ul>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}
