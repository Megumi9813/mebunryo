import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";

function MenuList({ menus, open }) {
  const [filteredMenus, setFilteredMenus] = useState(menus);
  const [menuContents, setMenuContents] = useState(menus);
  const [navMenus, setNavMenus] = useState([
    {
      title: "やっぱり赤でしょ〜",
      isActive: false,
      type: "赤",
    },
    {
      title: "白ワインな気分♪",
      isActive: false,
      type: "白",
    },
    {
      title: "琥珀色ワイン!?",
      isActive: false,
      type: "泡",
    },
    {
      title: "イタリア産🇮🇹",
      isActive: false,
      type: "イタリア",
    },
    {
      title: "スペイン産🇪🇸",
      isActive: false,
      type: "スペイン",
    },
    {
      title: "アルゼンチン産",
      isActive: false,
      type: "アルゼンチン",
    },
  ]);

  useEffect(() => {
    let tempFilteredMenus = [...menus];
    let isAllNavInActive = true;
    for (let navMenu of navMenus) {
      if (navMenu.isActive) isAllNavInActive = false;
    }

    if (!isAllNavInActive) {
      const activeTypes = navMenus
        .map((navMenu) => {
          if (navMenu.isActive === false) return null;
          return navMenu.type;
        })
        .filter((v) => (v ? true : false));
      tempFilteredMenus = menus.filter((menu) => {
        let isMenuActive = false;

        for (let type of activeTypes) {
          if (menu.type === type || menu.country === type) {
            isMenuActive = true;
          }
        }
        return isMenuActive;
      });
    }
    setFilteredMenus(tempFilteredMenus);
  }, [navMenus, menuContents]);

  return (
    <div className="MenuList">
      <div className={open ? "filter_screen open" : "filter_screen"}>
        <div className="button_container">
          <ul className="button-list">
            {navMenus.map((navMenu, i) => (
              <li className="button-item" key={navMenu.title}>
                <button
                  className="filter_btn"
                  onClick={() => {
                    const newNavMenus = [...navMenus];
                    newNavMenus[i].isActive = !newNavMenus[i].isActive;

                    setNavMenus(newNavMenus);
                  }}
                  style={{
                    backgroundColor: navMenu.isActive ? "#d03c21" : "#fffbda",
                    color: navMenu.isActive ? "#fffbda" : "#d03c21",
                    border: navMenu.isActive
                      ? "2px solid #d03c21"
                      : "2px solid #d03c21",
                  }}
                >
                  {navMenu.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {filteredMenus.map((menu) => {
        return <MenuItem menu={menu} key={menu.name} />;
      })}
      {console.log(filteredMenus)}
    </div>
  );
}

export default MenuList;
