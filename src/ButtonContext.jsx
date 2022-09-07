import React from 'react'
import MenuList from "./components/MenuList";

function ButtonContext({menus, open}) {
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

    console.log(buttonMenus);

  return (
      <MenuList menus={menus} open={open} />
  );
}

export default ButtonContext