
import Head from './Head';
import style from './FormContainer.module.css'
import Form from './Form';
import Foot from './Foot';
import { useState } from 'react';

function FormContainer() {
  const [movesEyes, setmovesEyes] = useState(false);
  const [movesHands, setHandsEyes] = useState(false);
  const EyesFocusHandler = () => {
    setmovesEyes(true);
  }

  const EyesBlurHandler = () => {
    setmovesEyes(false);
  }

  const HandFocusHandler = () => {
    setHandsEyes(true);
  }

  const HandBlurHandler = () => {
    setHandsEyes(false);
  }

  return (
    <div className={style.formContainer}>
      <Head movesEyes={movesEyes} movesHands = {movesHands} />
      <Form FocusHandler={EyesFocusHandler} BlurHandler={EyesBlurHandler} HandFocusHandler = {HandFocusHandler} HandBlurHandler = {HandBlurHandler} />
      <Foot />
    </div>
  )
}
export default FormContainer;
