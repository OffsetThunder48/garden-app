import * as actionTypes from './actions/actions';

const intitialState = {
    posts: [],
    users: [],
    isLoading: true,
    errors : null
};

const reducer = (state = intitialState, payload) => {
    console.log(payload);
    switch(payload.type) {
        case actionTypes.FETCH_POSTS: return {
            ...state,
            ...state.posts
        }
        case actionTypes.FETCH_USERS: return {
            ...state,
            ...state.users
        }
        case actionTypes.SET_USER: return {
            ...state,
            ...state.users,
            ...state.isLoading = false,
            user: payload.user,
            errors: null
        }
        case actionTypes.DELETE_USER: return {
            ...state,
            ...state.users.filter((user) => user.id !== payload.id)
        }
        case actionTypes.FETCH_USER: return {
            ...state,
            ...state.users,
            isLoading: false
        }
        case actionTypes.SET_POSTS : return {
            ...state,
            posts: payload.posts,
            isLoading: false,
        }
        case actionTypes.SET_USERS: return {
            ...state,
            users: payload.users,
            isLoading: false
        }
        default: return state;
}
};

export default reducer;