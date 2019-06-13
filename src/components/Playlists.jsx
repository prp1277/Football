import React from 'react';

class Playlists extends Component {
  render() {
    return (
      <div id="Spotify" classname="container-fluid bg-dark">

        <div id="myPlaylists" className="text-light">
          <a href="https://open.spotify.com/playlist/43VlEbjj3MeDvAblpakjpd?si=ADSYmuOuRty5SQpYkdJh9Q">Public</a>
          <a href="https://open.spotify.com/playlist/1KM6H5mnVHkV0TgUMLiAF7?si=DJvwI7b8QxyVckInBF2VGg">Rap Music</a>
        </div>

        <div id="otherPlaylists" className="text-light">
          <a href="https://open.spotify.com/playlist/0pNSggbwP4NHudm5kC9UYH?si=J5c_V-NpThm56LhrDsUcGw">Slap Summer</a>
          <a href="https://open.spotify.com/playlist/1WfwIkjuKraVjxR9TwmEJn?si=3nllVespTLyEl2gS8qRdJg">Slap Chat</a>
        </div>
      </div>
    );
  }
}

export default Playlists;
