import React, {useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem/PostItem";
// import axios from 'axios';
// import Counter from "./components/Counter";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body:'мой любимый язык'},
      {id: 2, title: 'React', body:'мой любимая библиотека'},
      {id: 3, title: 'React native', body:'приоритет в изучении'},
      {id: 4, title: 'Node', body:'важный язык'}
  ])


  return (
        <div className="App">
          {posts.map(post =>
              <PostItem post={post} key={post.id}/>
            )}
        </div>
        );
}

export default App;
