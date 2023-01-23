import React from 'react'
import { Link } from 'react-router-dom';
import "../homepage.css";

function HomePage() {

  return (
    <div>
      <div id='home_title'>
        <h2>React 練習專案</h2>
      </div>
      <div id='home_slogan'>
        <h3>歡迎光臨我的頁面</h3>
      </div>
      <button id='home_btn'><Link to={"/list"}>點此開始</Link></button>
    </div>
  )
}

export default HomePage
