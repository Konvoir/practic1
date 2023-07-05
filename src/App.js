import React, {useRef, useState} from "react";
import './styles/App.css'
import Postlist from "./components/PostList/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body:'мой любимый язык'},
      {id: 2, title: 'React', body:'мой любимая библиотека'},
      {id: 3, title: 'React native', body:'приоритет в изучении'},
      {id: 4, title: 'Node', body:'важный язык'},
  ])
    const [post, setPost] = useState({title: '', body: ''})
    

    const addNewPost = (e) => {
      e.preventDefault()
      setPosts([...posts, {...post, id: Date.now()}])
      setPosts({title: '', body: ''})
    }

  return (
        <div className="App">
          <form>
            {/* управляемый компонент */}
            <MyInput 
              value={post.title}
              onChange={e => setPost({...post, title: e.target.value})}
              type="text" 
              placeholder="Название поста"/>

            <MyInput 
              value={post.body}
              onChange={e => setPost({...post, body: e.target.value})}
              type="text" 
              placeholder="Описание поста"/>

            {/* Неуправляемый компонент */}
            {/* <MyInput 
              ref={bodyInputRef}
              type="text" 
              placeholder="Описание поста"/> */}
            
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
            
            
          </form>
          <Postlist posts={posts} title='Список постов'/>
        </div>
        );
}

export default App;
