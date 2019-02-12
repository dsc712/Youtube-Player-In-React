import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
    render() {
        if( this.props.videos.length === 0 ) {
          return (
              <div style={{ "width": "40%", "background": "#ddd", "color": "#000" }}>
                  <h4>No Search Results</h4>
              </div>
          )
        }

        const videoItems = this.props.videos.map((video, index) => {
            return (
                <VideoListItem
                    key={ index }
                    video={video}
                    onUserSelected={ this.props.onVideoSelect.bind( this, [ index ]) }
                />
            )
        });

        return (
            <ul style={{ "listStyle":"none" ,"width":"40%", "padding": "5px", "border": "1px solid #efefef", "marginBottom": "3px", "borderRadius": "5px" }}>
                { videoItems }
            </ul>
        );
    }
}

export default VideoList;