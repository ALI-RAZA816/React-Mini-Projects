import React from 'react';
import style from './ListItem.module.css'

function ListItem({ listitem}) {
    return (
        <div className={style.ListItem}>
            <ul>
                {listitem.map(item => {
                    return <li key={item}>{item}<button>Buy</button></li>
                })}
            </ul>
        </div>
    )
}

export default ListItem;
