import React, { Component } from 'react';

class VideoListItem extends Component {
    render() {
        const video = this.props.video;
        const imageUrl = video.snippet.thumbnails.default.url;
        return (
          <li onClick={ () => this.props.onUserSelected() } style={{ "border": "1px solid #efefef", "marginBottom": "3px", "borderRadius": "5px"}}>
              <div>
                  <img src={ imageUrl } alt={ video.snippet.title }/>
                  <span style={{ "color": "#444"}}>{ video.snippet.title }</span>
              </div>
          </li>
        );
    }
}

export default VideoListItem;