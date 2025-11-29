
import style from './Foot.module.css'

export default function Foot() {
    return (
        <>
            <div className={`${style.foot} ${style.footL}`}>
                <div className={`${style.nails} ${style.nail1}`}></div>
                <div className={`${style.nails} ${style.nail2}`}></div>
                <div className={`${style.nails} ${style.nail3}`}></div>
            </div>
            <div className={`${style.foot} ${style.footR}`}>
                <div className={`${style.nails} ${style.nail1}`}></div>
                <div className={`${style.nails} ${style.nail2}`}></div>
                <div className={`${style.nails} ${style.nail3}`}></div>
            </div>
        </>
    )
}
