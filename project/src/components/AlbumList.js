import React from 'react';
import {Link} from 'react-router-dom';
export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.albums.length > 0) {
      return (
        <ul className="item-list">
            {this.props.albums.map((album, i) =>
                <div className="item-list__item grid-item" key={i}>
                  <Link to={`/album/${album.id}`}>
                    <div
                      className="image-container image-container--shadow"
                      style={{"backgroundImage": "url(" + (album.images.length > 0 ? album.images["0"].url: "") + ")"}}>
                    </div>
                      <h6>
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
