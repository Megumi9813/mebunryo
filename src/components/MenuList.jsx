import React from 'react'
import MenuItem from './MenuItem'

function MenuList({menus}) {
  return (
    <div className="MenuList">
        {
          menus.map(menu => (
            <MenuItem menu={menu} key={menu.name}/>
          ))
        }
    </div>
  )
}

export default MenuList