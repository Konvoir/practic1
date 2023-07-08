import React, {useState} from "react";
import './styles/App.css'
import Postlist from "./components/PostList/Postlist";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body:'мой любимый язык'},
      {id: 2, title: 'React', body:'мой любимая библиотека'},
      {id: 3, title: 'React native', body:'приоритет в изучении'},
      {id: 4, title: 'Node', body:'важный язык'},
  ])
     
  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
    
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
        <div className="App">
          <PostForm create={createPost}/>
              <hr style={{margin: '15px 0'}}/>
          <div>
           
           <MySelect 
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                  {value: 'title', name: 'По названию'},
                  {value: 'body', name: 'По описанию'},
                ]}
           />
           
            {/* <select>
              <option value="value1">По названию</option>
              <option value="value1">По описанию</option>
            </select> */}
          </div>

          {posts.length 
              ? <Postlist remove={removePost} posts={posts} title='Список постов'/>
              : <h1> Посты не найдены</h1>
          }

          </div>
        );
}

export default App;
