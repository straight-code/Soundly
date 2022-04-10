import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import logo from "./images/text-logo.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";

const { Content, Sider, Footer } = Layout;

const App = () => {

  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <img src={logo} alt="Logo" className="logo"></img>
          <div className='spacer'></div>
            <Link to="/">
            <p style={{ color: "#901acf" }}> Home </p>
            </Link>
            <p> Your Music </p>
            <div className='spacer'></div>
            <p style={{ color: "#901acf" }}><a href='https://twitter.com/soundly_web3' style={{ color: "#901acf" }} > Twitter</a> </p>
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
