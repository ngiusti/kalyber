import React from 'react'

import './item-block.scss'

const ItemBlock = (props) => (
    <div className="item-block__wrap">
        <h2 className="item-title">{props.title}</h2>
        <div className="item-content__wrap">
            <p className="item-copy">
                {props.children}
            </p>
        </div>
    </div>
)

export default ItemBlock