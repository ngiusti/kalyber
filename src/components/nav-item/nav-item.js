import React from 'react'

import './nav-item.scss'

const NavItem = (props) => (
    <li className="nav-item__wrap">
        <a href={`#${props.title}`}>{props.title}</a>
    </li>
)

export default NavItem;