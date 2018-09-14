import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAllMusic} from '../../ducks/reducer';


class Playlist extends Component {
    constructor(props){
        super(props);
        this.state={
          //  AllMusic:[]
        }
        console.log('props', props)
    }

    componentDidMount(){
      // axios.get('/api/music').then(response => {
      //   this.props.setAllMusic(response.data)
      // })
    }

    
    
    render (props) {
      console.log('-----', this.props.setAllMusic)
    //   const albumz = this.props.map((song,index) =>{
    //     return <div key={song.id}>
    //     <div>title: {song.title}</div>
    //     <div>artist: {song.artist}</div>
    //     <div>album:{song.album} </div>
    //     </div>
    // })
    return (
      <div className="Details_App">
      
        <div> hello world</div>
        {/* <div>{albumz}</div> */}
      </div>
    );
  }
}

export default connect(null, {setAllMusic})(Playlist);