import React, {useState} from "react";
import './styles/App.css'
import Postlist from "./components/PostList/Postlist";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body:'мой любимый язык'},
      {id: 2, title: 'React', body:'мой любимая библиотека'},
      {id: 3, title: 'React native', body:'приоритет в изучении'},
      {id: 4, title: 'Node', body:'важный язык'},
  ])
     
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
    
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
        <div className="App">
          <PostForm create={createPost}/>
          <Postlist remove={removePost} posts={posts} title='Список постов'/>
        </div>
        );
}

export default App;
