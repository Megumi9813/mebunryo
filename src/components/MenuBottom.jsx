import React from 'react'
import { useState } from 'react'

function MenuBottom({open, setOpen}) {
  return (
    <div className='menuBottom'>
      <div className="menu_button">
        {
          open ? (
            <button className='filter' onClick={() => setOpen(!open)}>絞り込み完了 !</button>
          ) : (
            <button className='filter' onClick={() => setOpen(!open)}>絞り込む</button>
          )
        }
      </div>
    </div>
  )
}

export default MenuBottom