import React from 'react'
import style from './Contact.module.css'
function Contact() {
    return (
        <div>
            <div className={style.mainContainer}>
                <div className={style.leftBox}>
                    <div className={style.form}>
                        <div className={style.btnBox}>
                            <div className={style.btns}>
                                <button><i className='fa-solid fa-envelope'></i>Via Support Chat</button>
                                <button><i className='fa-solid fa-phone'></i>Via Call</button>
                            </div>
                            <button><i className='fa-solid fa-message'></i>Via Email Form</button>
                        </div>
                        <form action="" className={style.formBox}>
                            <div className={`${style.name} inputfield`}>
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' id='name' />
                            </div>
                            <div className={`${style.email} inputfield`}>
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email' id='email' />
                            </div>
                            <div className={`${style.message} inputfield`}>
                                <label htmlFor="text">Text</label>
                                <textarea name="text" id="text"></textarea>
                            </div>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className={style.rightBox}>
                    <img src="./images/Service 24_7-pana 1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact;
