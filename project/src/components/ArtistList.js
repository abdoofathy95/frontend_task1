import React from 'react';
import {Link} from 'react-router-dom';
export default class ArtistList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.artists.length > 0) {
      return (
        <ul className="item-list">
            {this.props.artists.map((artist, i) =>
                <div className="item-list__item grid-item" key={i}>
                  <Link to={`/artist/${artist.id}`}>
                    <div
                      className="image-container image-container--shadow"
                      style={{"backgroundImage": "url(" + (artist.images.length > 0 ? artist.images["0"].url: "") + ")"}}>
                    </div>
                      <h6>
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
