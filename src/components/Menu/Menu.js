import React from "react";
import {Card, Button} from 'antd';
import './Menu.css'

const Menu = (props) => {
    return (
        <div className="site-card-border-less-wrapper">
                {props.menu.map(item =>
                    <Card
                        title={item.name}
                        bordered={false}
                        style={{ width: 300, marginRight: 30 }}
                        key = {item.id}>
                        <p>Price: <span>{item.price}</span></p>
                        <Button size = 'small'>-</Button>
                        <Button size = 'small'>+</Button>
                    </Card>
                )}
                </div>

    )
}

export default Menu
