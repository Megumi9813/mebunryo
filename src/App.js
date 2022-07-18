import React, {useState, useEffect} from 'react'
import './App.scss'
import MenuList from './components/MenuList';
import MenuTop from './components/MenuTop'
import useContentful from './useContentful'
import MenuBottom from './components/MenuBottom'

function App() {
  const [menus, setMenus] = useState([]);
  const {getMenu} = useContentful();

  useEffect(() => {
    getMenu().then((res) => setMenus(res))
  });

  return (
      <div className="App">
        <MenuTop />
        <MenuList menus={menus}/>
        <MenuBottom />
      </div>
  )
}

export default App
