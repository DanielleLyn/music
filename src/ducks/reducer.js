const initialState = {
    AllMusic: [],
}

//Action types 

const SET_MUSIC = 'SET_MUSIC';


export default function reducer (state=initialState, action) {
    console.log('REDUCER HIT ---', action.type);
    switch(action.type){
        case SET_MUSIC: 
            return Object.assign({}, state, {AllMusic: action.payload});

        default: return state;
    }
}

export function setAllMusic(AllMusic){
    return{
        type: SET_MUSIC,    
        payload: AllMusic
    }
    
}