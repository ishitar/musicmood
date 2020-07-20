import React, { Component } from 'react'
import _ from 'lodash';
import './SongDisplay.css';

export default class SongDisplay extends Component {
    render() {
        const {artistName,songName,albumImage,timePlayed} = this.props;
        return (
            <React.Fragment>
                <div className="container flex">
                    <img className="album-img-top item" src={albumImage} alt="Card image cap"/>
                    <p className="song-title item">{songName}<br/><span className="artist-title">{artistName}</span></p>
                    <p className="item push-right">{timePlayed}</p>
                </div>
                        
            </React.Fragment>
            
        )
    }
}
