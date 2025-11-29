
import style from './Head.module.css'

function Head({movesEyes, movesHands}) {
    return (
        <div className={style.head}>
            <div className={`${style.eyesL} ${style.eyes}`}>
                <div className={`${style.eyesDot} ${movesEyes === true? `${style.eyesDot1}`: ' '}`} id="eyes-dot-1"></div>
            </div>
            <div className={`${style.eyesR} ${style.eyes}`}>
                <div className={`${style.eyesDot} ${movesEyes === true? `${style.eyesDot2}`: ' '}`} id="eyes-dot-2"></div>
            </div>
            <div className={style.nose}></div>
            <div className={style.nthL} ></div>
            <div className={style.nthR} ></div>
            <div className={`${style.hand} ${style.handL} ${movesHands === true ? `${style.Lactive}` : ''}`} id="hand-l"></div>
            <div className={`${style.hand} ${style.handR} ${movesHands === true ? `${style.Ractive}` : ''}`} id="hand-r"></div>
        </div>
    )
}

export default Head;
