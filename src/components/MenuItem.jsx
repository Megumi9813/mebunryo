import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


function MenuItem({menu}) {
  return (
    <div className="wine_item">
        <div className="img_holder">
            <img src={menu.img} alt="" />
        </div>
        <div className="wine_info-wrapper">
        <div className="wine_info">
            <div className="name wine_info-item">{menu.name}</div>
            <div className="contry wine_info-item">原産国: {menu.country}</div>
            <div className="manufacturer wine_info-item">製造者: {menu.manufacturer}</div>
            <div className="importer wine_info-item">輸入者: {menu.importer}</div>
            <div className="price wine_info-item">価格: ￥{menu.price}</div>
            <div className="quantity wine_info-item">在庫数: {menu.quantity}</div>
            <div className="comment wine_info-item">{menu.comment}</div>
            <div className="richText wine_info-item">{documentToReactComponents(menu.richComment)}</div>
        </div>
        </div>
    </div>
  )
}

export default MenuItem