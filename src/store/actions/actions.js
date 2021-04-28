import axios from 'axios';

export const SET_POSTS = 'SET_POSTS'
export const DELETE_USER = 'DELETE_USER'
export const SET_USER = 'SET_USER';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const SET_USERS = 'SET_USERS';

export const setPosts = (posts) => {
    console.log(posts);
    return {
        type: SET_POSTS,
        posts: posts
    }
}

export const setUser = (user) => {
    console.log(user);
    return {
        type: SET_USER,
        user: user
    }
}

export const setUsers = (users) => {
    console.log(users);
    return {
        type: SET_USERS,
        users: users
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
          res => {
            res.data.map(post => ({
            userId: `${post.userId}`,
            id: `${post.id}`,
            title: `${post.title}`,
            body: `${post.body}`,
            }));
            res.data.forEach(user => {
                user.likes = 500
                user.dislikes = 100
            })
            dispatch(setPosts(res.data))
        }
    ).catch(err => console.log(err)) 
    }
}

export const fetchUsers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {
                console.log(res.data);
                res.data.map(user => ({
                    id: `${user.id}`,
                    name: `${user.name}`,
                    username: `${user.username}`,
                    phone: `${user.phone}`,
                    email: `${user.email}`,
                }));
                console.log(res.data)
                dispatch(setUsers(res.data))
            }
        ).catch(err => console.log(err))
    }
}

export const fetchUser = (id) => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(
            res => dispatch(setUser(res.data))
        ).catch(err => console.log(err))
    }
}
