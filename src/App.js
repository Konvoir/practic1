import React, {useState, useMemo} from "react";
import './styles/App.css'
import Postlist from "./components/PostList/Postlist";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body:'мой любимый язык'},
      {id: 2, title: 'React', body:'мой любимая библиотека'},
      {id: 3, title: 'React native', body:'приоритет в изучении'},
      {id: 4, title: 'Node', body:'важный язык'},
  ])
     
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  
  
  const sotedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sotedPosts.filter(post => post.title.toLowerCase.includes(searchQuery.toLowerCase))
  }, [searchQuery, sotedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
    
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    }

  return (
        <div className="App">
          <PostForm create={createPost}/>
              <hr style={{margin: '15px 0'}}/>
          <div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
            />
           
           <MySelect 
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                  {value: 'title', name: 'По названию'},
                  {value: 'body', name: 'По описанию'},
                ]}
           />
           
            </div>

          {posts.length 
              ? <Postlist remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
              : <h1> Посты не найдены</h1>
          }

          </div>
        );
}

export default App;
