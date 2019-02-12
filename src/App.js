import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import YTSearch from 'youtube-api-search';

import './App.css';
const API_KEY = 'AIzaSyDHUPNoZud40KDT3OWupehzp8E5gp6Pz58';

class App extends Component {
  constructor( props ) {
    super(props);
    this.state = {
       videos: [],
       search: true,
       selectedVideo: {}
    }
  }

  videoSearch( term ) {
    if( this.state.search ) {
      YTSearch({ key: API_KEY, term }, ( data ) => {
        this.setState({ videos: data, selectedVideo: data[0] });
        console.log( this.state.videos );
      });
    }
  }

  handleChange = (value) => {
    setTimeout( () => {
      if( value === ''){
        this.setState({ videos: [], selectedVideo: null });
        return;
      }

      if( this.state.search ) {
        this.videoSearch( value );
      }

      setTimeout( () => {
        this.setState({ search: true });
      }, 5000);

    }, 2000);

  };

  render() {
    return (
      <div style={{ "display": "flex", "flexDirection": "column"  }}>
        <div style={{ "display": "flex", "justifyContent": "space-between", "background": "#1890ff"}}>
          <h1 style={{ "color": "#fff", "alignSelf": "center", "flexBasis": "4" }}>YTSearch</h1>
          <SearchBar videos={ this.state.videos } video={ this.state.selectedVideo } onChange={ this.handleChange } handleSearch={ (video) => { this.setState({ selectedVideo: this.state.videos[video], search: false })}}/>
        </div>
        <div style={{ "display" : "flex" }}>
          <VideoDetail video={ this.state.selectedVideo }/>
          <VideoList
              videos={ this.state.videos }
              onVideoSelect={ ( userSelected ) => { this.setState({ selectedVideo: this.state.videos[ userSelected ] }) }}
          />
        </div>
      </div>
    );
  }
}

export default App;
