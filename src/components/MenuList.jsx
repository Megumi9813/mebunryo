import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";

function MenuList({ menus, open }) {
  const [filteredMenus, setFilteredMenus] = useState(menus);
  const [menuContents, setMenuContents] = useState(menus);

  let buttonData = menus.map((item) => ({
    country: item.country,
    type: item.type,
  }));
  let buttonDataArr = [];
  for (let value of buttonData) {
    buttonDataArr.push(Object.values(value));
  }
  let countryAndTypeData = Array.from(new Set(buttonDataArr.flat()));
  let countryAndTypeKey = countryAndTypeData.filter(
    (element) => element !== "anonymous" && element !== undefined
  );

  let buttonMenus = countryAndTypeKey.map((key) => ({
    title: key,
    isActive: false,
    type: key,
  }));

  const [navMenus, setNavMenus] = useState(buttonMenus);

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
