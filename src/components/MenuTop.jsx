import React from 'react'
import HomeImg from '../assets/HomeImg.jpeg'

function MenuTop() {
  return (
    <>
      <h1>八丁堀 目分量</h1>
      <div className="menu_top-img">
        <h3>ワインリスト＋α</h3>
        <figure>
          <img src={HomeImg} alt="" />
        </figure>
      </div>
      <div className="menu_top-para">
        <h4>セラーその他店内に眠っているワインの他、メニューに書き切れていないお酒達です。</h4>
        <p>商品の説明はテクニカルシート丸写しか、店主の主観に満ち満ちたそんなにはあてにならないモノです。<br />ご参考程度に。。。</p>
      </div>
    </>
  )
}

export default MenuTop