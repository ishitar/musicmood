import React, { Component } from 'react';
//import './LandingPage.css';
import logo from '../../reaction-sad.svg';
import SpotifyWebApi from 'spotify-web-api-js';
import SongDisplay from '../SongDisplay/SongDisplay';
import ActivityForm from '../ActivityForm/ActivityForm';
import {MusicCluster} from '../MusicCluster/MusicCluster';

const spotifyApi = new SpotifyWebApi();

class LandingPage extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      apiResponse: [],
      trackDetails: {},
      track: null,
      albumImage:[]
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        console.log(response);
        this.setState({
          nowPlaying: { 
              name: response ? response.item.name : "Oops, you're not playing anything!", 
              albumArt: response ? response.item.album.images[0].url : logo
            }
        });
      })
  }

  getRecentTracks() {
    let songName = [], artistName = [], albumName = [], timePlayed = [], albumImage = [];
    spotifyApi.getMyRecentlyPlayedTracks()
    .then(response => response.items)
    .then(resp => {
      this.setState({apiResponse:resp});
      resp.map(data => {
      // songName.push(data.track.name);
      // timePlayed.push(data.played_at);
      // albumName.push(data.track.album.name);

      if(data.track.album.images[2].url){
        albumImage.push(data.track.album.images[2].url);
      }
      // let artists = [];
      // data.track.artists.map(songData => {
      //   artists.push(songData.name);
      // });
      // artistName.push(artists);
      //var track = <SongDisplay songName={data.track.name} timePlayed={data.played_at} albumName={data.track.album.name} albumImage={data.track.album.images[2].url} artistName={artists}/>;
      
    })})
    this.setState({albumImage});
    //console.log(songName, artistName, albumImage, albumName, timePlayed);
    
  }
  render() {
    const { loggedIn, apiResponse, albumImage} = this.state;
    console.log(this.state.albumImage);

    return (
      <div className="LandingPage">
        {!loggedIn ? <a href='http://localhost:8888' > Login to Spotify </a> :
        <a href=''>Logout</a>}
        <MusicCluster images={albumImage}/>
        <ActivityForm />
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
        </div>
        { loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
          
        }
        {
          loggedIn &&
          <button onClick={() => this.getRecentTracks()}>
            Check My Recent Tracks
          </button>
        }
        {
          this.state.apiResponse && this.state.apiResponse.map(data=>{
            let artists = [];
            data.track.artists.map(songData => {
              artists.push(songData.name);
            });
            var playedOn = new Date(data.played_at);
            var rightNow = new Date();
            var diffTime = Math.abs(rightNow - playedOn);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            diffDays += diffDays > 1 ? " days ago" : " day ago";
            return <SongDisplay songName={data.track.name} timePlayed={diffDays} albumName={data.track.album.name} albumImage={data.track.album.images[2].url} artistName={artists}/>
          })
          
        }
    
      </div>
    );
  }
}

export default LandingPage;