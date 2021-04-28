import React, {Component} from 'react'

import { connect } from 'react-redux'
import * as actionTypes from '../store/actions/actions'
import './blog.css'

class Blog extends Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
        this.props.onFetchPosts();
      }
    render() {  
    return (
        <div className="container-fluid">
            {this.props.posts.map((post) => (
                <div key={post.id} className="card" >
                    <div className="card-body">
                        <p className="card-title text-muted">{post.title}</p>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
    }
};

const mapStateToProps = state => {
    return {
      posts: state.posts
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onFetchPosts: () => dispatch(actionTypes.fetchPosts())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Blog)