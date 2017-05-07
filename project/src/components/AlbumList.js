import React from 'react';
import {Link} from 'react-router-dom';
import './css/ItemList.css';
export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.albums.length > 0) {
      return (
        <ul className="items">
          {this.props.albums.map((album, i) =>
            <div
              className="item"
              key={i}>
              <Link to={`/album/${album.id}`}>
                <div
                  className="item_image"
                  style={{"backgroundImage": "url(" + (album.images.length > 0 ? album.images["0"].url: "") + ")"}}>
                </div>
                <h6 className="left_item">
                  {album.name}
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
