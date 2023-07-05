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
      {id: 4, title: 'Node', body:'важный язык'}
  ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const addNewPost = (e) => {
      e.preventDefault()
      const newPost = {
        id: Date.now(),
        title,
        body
      }
      setPosts([...posts, newPost])
      setTitle('')
      setBody('')
    }

  return (
        <div className="App">
          <form>
            {/* управляемый компонент */}
            <MyInput 
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text" 
              placeholder="Название поста"/>

            <MyInput 
              value={body}
              onChange={e => setBody(e.target.value)}
              type="text" 
              placeholder="Описание поста"/>

            {/* Неуправляемый компонент */}
            {/* <MyInput 
              ref={bodyInputRef}
              type="text" 
              placeholder="Описание поста"/> */}
            
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
            
            
          </form>
          <Postlist posts={posts} title ={'Список постов'}/>
        </div>
        );
}

export default App;
