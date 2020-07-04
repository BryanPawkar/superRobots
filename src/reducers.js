import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_KITTYS_PENDING,
    REQUEST_KITTYS_SUCCESS,
    REQUEST_KITTYS_FAILED
} from './constants'; 

const initialStateSearch = {
    searchfield: ''
}

export const searchToys = (state = initialStateSearch, action= {}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchfield:action.payload});
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false, 
    robots: [],
    error: ''
}
export const requestRobots = ( state= initialStateRobots, action= {})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false})
        default:
            return state; 
    }
}

const initialStateKittys = {
    isPending: false, 
    kittys: [],
    error: ''
}
export const requestKittys = ( state= initialStateKittys, action= {})=>{
    switch(action.type){
        case REQUEST_KITTYS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_KITTYS_SUCCESS:
            return Object.assign({}, state, { kittys: action.payload, isPending: false })
        case REQUEST_KITTYS_FAILED:
            return Object.assign({}, state, { kittys: action.payload, isPending: false})
        default:
            return state; 
    }
}
