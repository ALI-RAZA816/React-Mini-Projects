
import style from './ListItemContainer.module.css'
import ListItem from './ListItem';
function ListItemContainer( ) {
    
    return (
        <div className={style.listItemContainer}>
            <div className={style.listContainer}>
                <span>Expense List</span>
                <ListItem/>
            </div>
        </div>
    )
}
export default ListItemContainer;
