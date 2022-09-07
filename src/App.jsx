import React, { useState, useEffect } from "react";
import "./App.scss";
import MenuTop from "./components/MenuTop";
import useContentful from "./useContentful";
import MenuBottom from "./components/MenuBottom";
import MenuList from "./components/MenuList";

function App() {
  const [open, setOpen] = useState(false);
  const [menus, setMenus] = useState([]);
  const { getMenu } = useContentful();
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (menus.length === 0) {
      getMenu().then((res) => setMenus(res));
    } else {
      setLoading(false);
    }
  }, );

  return (
    <div className="App">
      <MenuTop />
      {loading ? "" : <MenuList menus={menus} open={open} />}
      <MenuBottom open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
