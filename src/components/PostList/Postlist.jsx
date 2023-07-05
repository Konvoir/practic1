import React from 'react';
import './Postlist.scss';
import PostItem from "./../PostItem/PostItem"

const Postlist = ({posts, title}) => {
    return (
        <div>
            <h1 className='title'>{title}</h1>
          {posts.map(post =>
              <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default Postlist;