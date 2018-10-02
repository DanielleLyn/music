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
            this.setState({
                AllMusic: res.data
            })
        })
        .catch(error => {
            console.log('Axios error GET componentDidMount', error)
          })
        }

    deleteSong(id){
        return axios.delete(`/api/music/${id}`)
        .then(res => {
            console.log('res', res.data);
            window.location.reload();
        }).catch(err => console.log('error deleting song', err));
    }
        render() {
            console.log('new state', this.state);
      const albums = this.state.AllMusic.map((song,index) =>{
          return <div key={song.id}>
          <div>title: {song.title}</div>
          <div>artist: {song.artist}</div>
          <div>album:{song.album} </div>
          <div><button onClick = {() => this.deleteSong(song.id)}>Delete</button> </div>
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

// const mapDispatchToProps = {

//     setAllMusic

// }

export default AllMusic
