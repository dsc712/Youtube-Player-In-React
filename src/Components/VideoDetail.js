import React, { Component } from 'react';

class VideoDetail extends Component {
    state = {
        video: null
    };

    componentDidUpdate(prevProps) {
        if( this.props.video && ( prevProps.video !== this.props.video)  ) {
            this.setState({ video: this.props.video })
        }
    }

    render() {
        const video = this.state.video;

        if( !video ) {
            return (
                <div style={{ "width": "67.5%", "background": "#000", "color": "#fff", "height": "80vh" }}>
                    No Video Selected : Select a video to play
                </div>
            )
        }

        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${ videoId }`;

        return (
            <div>
                <div className={"embed-responsive embed-responsive-16by9"}>
                    <iframe className={"embed-responsive-item"} src={url} allowFullScreen />
                </div>
                <div>
                    <h2>
                        { video.snippet.title }
                    </h2>
                    <div>
                        { video.snippet.description }
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoDetail;

