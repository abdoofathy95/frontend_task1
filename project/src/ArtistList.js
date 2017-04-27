import React from 'react';
import {Link} from 'react-router-dom';
export default class ArtistList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.artists.length > 0) {
            return (
                <div>
                    <ul>
                        {this.props.artists.map((artist, i) => <li className='artist_flex' key={i}>
                            <img src={artist.images.length > 0
                                ? artist.images["0"].url
                                : ""}></img>

                            <Link to={`/artist/${artist.id}`}>
                                {artist.name}
                            </Link>
                        </li>)}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
