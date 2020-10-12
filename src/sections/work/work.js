import React from 'react'

import './work.scss'

import ItemBlock from '../../components/item-block/item-block'

const Work = () => (
    <div id='Work' className="work__wrap">
        <div className="content__wrap">
            <h2 className="content-title">Work</h2>
            <div className="content-items__wrap">
                <ItemBlock title="Application">
                    Vivamus a faucibus dolor, quis imperdiet nulla. Nunc et placerat neque. Nullam vitae maximus magna, quis ultrices urna. Ut rhoncus dapibus neque, id iaculis felis. 
                </ItemBlock>
                <ItemBlock title="E-commerce">
                    Vivamus a faucibus dolor, quis imperdiet nulla. Nunc et placerat neque. Nullam vitae maximus magna, quis ultrices urna. Ut rhoncus dapibus neque, id iaculis felis. 
                </ItemBlock>
                <ItemBlock title="Marketing">
                    Vivamus a faucibus dolor, quis imperdiet nulla. Nunc et placerat neque. Nullam vitae maximus magna, quis ultrices urna. Ut rhoncus dapibus neque, id iaculis felis. 
                </ItemBlock>
                <ItemBlock title="Social Media">
                    Vivamus a faucibus dolor, quis imperdiet nulla. Nunc et placerat neque. Nullam vitae maximus magna, quis ultrices urna. Ut rhoncus dapibus neque, id iaculis felis. 
                </ItemBlock>
            </div>
        </div>
        <div className="work-background"></div>
    </div>
)

export default Work