import React from 'react'
import "../homepage.css";

function HomePage() {

  function start(){
    window.location.href="/list";
  }

  return (
    <div>
      <div id='home_title'>
        <h2>React 練習專案</h2>
      </div>
      <div id='home_slogan'>
        <h3>歡迎光臨我的頁面</h3>
      </div>
      <button id='home_btn' onClick={start}>點此開始</button>
    </div>
  )
}

export default HomePage
