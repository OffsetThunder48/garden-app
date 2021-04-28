import React from 'react'

import './blog.css'

export const Blog = (props) => {
    return (
        <div className="container-fluid">
        {props.posts.map((post) => (
            <div key={post.id} className="card" >
                <div className="card-body">
                    <p className="card-title text-muted">{post.title}</p>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        ))}
        </div>
    );
};