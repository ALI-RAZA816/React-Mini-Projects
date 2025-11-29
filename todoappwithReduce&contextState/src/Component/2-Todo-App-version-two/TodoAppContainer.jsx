
import AppName from './AppName';
import AppFields from './AppFields';
import ListItem from './ListItem';
import style from './TodoAppContainer.module.css'
import TodoItemsReducerContextProvider from '../Store/Store-context';

function TodoAppContainer() {

    return (
        <TodoItemsReducerContextProvider>
            <div className={style.container}>
                <AppName />
                <AppFields />
                <ListItem />
            </div>
        </TodoItemsReducerContextProvider>
    )
}

export default TodoAppContainer;
