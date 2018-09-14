import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import AllMusic from './Components/AllMusic/AllMusic';
import Playlist from './Components/Playlist/Playlist';


const routes = (
    <Switch>
        
        <Route exact path = '/' component = {App} />
        <Route path="/AllMusic" component = {AllMusic} />
        <Route path='/Playlist' component =  {Playlist} />

    </Switch>
    

);

export default routes;