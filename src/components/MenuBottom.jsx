import React from 'react'
import { useState } from 'react'

function MenuBottom() {
  const [open, setOpen] = useState(false);

  return (
    <div className='menuBottom'>
      <div className={open ? "filter_screen open" : "filter_screen"}>
        <div className="button_container">
          <ul className="button-list">
            <li className="button-item">
              <button>やっぱり赤でしょ~</button>
            </li>
            <li className="button-item">
              <button>白ワインな気分♪</button>
            </li>
            <li className="button-item">
              <button>琥珀色ワイン!?</button>
            </li>
            <li className="button-item">
              <button>イタリア産🇮🇹</button>
            </li>
            <li className="button-item">
              <button>スペイン産🇪🇸</button>
            </li>
            <li className="button-item">
              <button>アルゼンチン産🇦🇷</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu_button">
        {
          open ? (
            <button className='filter' onClick={() => setOpen(!open)}>絞り込み完了 !</button>
          ) : (
            <button className='filter' onClick={() => setOpen(!open)}>ワインを絞り込む</button>
          )
        }
      </div>
    </div>
  )
}

export default MenuBottom