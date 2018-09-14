import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAllMusic} from '../../ducks/reducer';


class AllMusic extends Component {
    constructor(){
        super();
        this.state={
           AllMusic:[],
        }
    }
    componentDidMount() {
        axios.get('/api/music')
        .then(res => {
            console.log('response', res.data)
            this.props.setAllMusic(res.data)
        })
        .catch(error => {
            console.log('Axios error GET componentDidMount', error)
          })
        }
        render() {
            console.log('new state', this.state);
      const albums = this.state.AllMusic.map((song,index) =>{
          return <div key={song.id}>
          <div>title: {song.title}</div>
          <div>artist: {song.artist}</div>
          <div>album:{song.album} </div>
          </div>
      })
      console.log('---', albums)
    return (
      <div className="App">
      AllMusic
        <div>{albums}</div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return state;
// }

const mapDispatchToProps = {

    setAllMusic

}

export default connect( mapDispatchToProps)(AllMusic)
