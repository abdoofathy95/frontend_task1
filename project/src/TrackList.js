import React from 'react';
import './tracks.css';

export default function TrackList(props){
  const tracks = props.tracks;
  return(
    <div>
      <table>
        {tracks.map((track,i) => (
          <tr></tr>
        ))}
      </table>

    </div>
  );
}
