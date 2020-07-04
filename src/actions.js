import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_KITTYS_PENDING,
    REQUEST_KITTYS_SUCCESS,
    REQUEST_KITTYS_FAILED
} from './constants'; 

export const requestRobots = () => (dispatch) =>{
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( response =>response.json())
        .then( data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}

export const requestKittys = () => (dispatch) =>{
    dispatch({ type: REQUEST_KITTYS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( response =>response.json())
        .then( data => dispatch({ type: REQUEST_KITTYS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_KITTYS_FAILED, payload: error}))
}

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})