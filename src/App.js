import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Soundly from "./images/Soundly.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";

const { Content, Sider, Footer } = Layout;

const App = () => {

  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={500} className="sideBar">
            <img src={Soundly} alt="Logo" className="logo"></img>
            <div className="searchBar">
              <span><input className='searchInput' placeholder=' Search'></input>  </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>
            <Link to="/">
            <p style={{ color: "#1DB954" }}> Home </p>
            </Link>
            <p> Your Music </p>
            <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
            </div>
          </Sider>
          <Content className="contentWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
          </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum &&
          <Player
            url={nftAlbum}
          />
          }
        </Footer>
      </Layout>
    </>
  );
}


export default App;
