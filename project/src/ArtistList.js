import React from 'react';
import {Link} from 'react-router-dom';
export default class ArtistList extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {props.artists.map((artist, i) => <li className='artist_flex' key={i}>
                        <tr>
                            <td>
                                <img src={artist.images[0].url}></img>

                                return(
                                <li key={i}>
                                    <Link to={`/artist/${artist.id}`}>
                                        {artist.name}
                                    </Link>
                                </li>
                                )
                            </td>
                        </tr>
                    </li>)}
                </ul>
            </div>
        );
    }
}
