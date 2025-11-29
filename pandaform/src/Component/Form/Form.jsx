
import style from './Form.module.css'

function Form({FocusHandler ,BlurHandler, HandBlurHandler, HandFocusHandler}) {
    return (
        <form action="" className={style.form}>
            <label htmlFor="username">Username:</label>
            <input type="text" onFocus={FocusHandler} onBlur={BlurHandler} placeholder="Username here..." id="username" className={style.userNameField} />
            <label htmlFor="password">Password:</label>
            <input type="password" onFocus={HandFocusHandler} onBlur={HandBlurHandler} placeholder="Password here..." id="password" className={style.userPasswordField} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Form;
