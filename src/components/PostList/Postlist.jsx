import React from 'react';
import './Postlist.scss';
import PostItem from "./../PostItem/PostItem"

const Postlist = ({posts, title, remove}) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
          {posts.map((post, index) =>
              <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default Postlist;