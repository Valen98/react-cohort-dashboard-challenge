import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LeftMenu from "./components/leftMenu/leftMenu";
import Header from "./components/header/header";
import PostBody from "./components/posts/index";
const PostContext = createContext();
const UserContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/valen98/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
      
    fetch("https://boolean-uk-api-server.fly.dev/valen98/contacts")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  console.log(posts);

  return (
    <main>
      <Header />
      <div className="mainBody">
        <LeftMenu />
        <UserContext.Provider value={{ users, setUsers }}>
          <PostContext.Provider value={{ posts, setPosts }}>
            <Routes>
              <Route path="/" element={<PostBody />} />
            </Routes>
          </PostContext.Provider>
        </UserContext.Provider>
      </div>
    </main>
  );
}

export { App, PostContext, UserContext };
