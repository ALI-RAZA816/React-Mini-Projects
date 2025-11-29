import {useState} from 'react';
import style from './PasswordGenerator.module.css'

export default function PasswordGenerator() {
    const [password ,setpassword ] = useState('');
    const [length ,setlength] = useState(12);
    const [uppercasevalue, setuppercase] = useState(false);
    const [lowerrcasevalue, setlowercase] = useState(false);
    const [numbervalue, setnumber] = useState(false);
    const [symbolsvalue, setsymbols] = useState(false);

    const generatePassword = ()=>{
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ';
        const lowrcase = 'abcdefghijklmnopqrstuvwxyz';
        const number = '0123456789';
        const symbols = '`~+_)(*&^%$#@!"|;>?<,./';
        let characters = '';

        if(uppercasevalue === false && lowerrcasevalue === false && symbolsvalue === false && numbervalue === false){
            alert("Select at least one type....");
            return;
        }

        if(uppercasevalue) characters += uppercase;
        if(lowerrcasevalue) characters += lowrcase;
        if(symbolsvalue) characters += symbols;
        if(numbervalue) characters += number;

        let generatedPassword = '';
        for(var i = 0 ; i<length; i++){
            let randompassword = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randompassword];
        }
        setpassword(generatedPassword);
    }
  return (
    <div className={style.container}>
      <h1>Password Generator</h1>
      <div className={style.fields}>
        <input type="text" value={password} placeholder='Your password will appear here' />
      </div>
      <div className={style.rangefields}>
        <span>Password Length : {length}</span>
        <input type="range" min={6} max={32} value={length} onChange={(e)=> setlength(e.target.value)} />
      </div>
      <div className={style.inputFields}>
        <div className={style.uppercase}>
            <input type="checkbox" checked={uppercasevalue} onChange={(e)=> setuppercase(e.target.checked)} id='uppercase' />
            <label htmlFor="uppercase">Include UpperCase</label>
        </div>
        <div className={style.lowercase}>
            <input type="checkbox" checked={lowerrcasevalue} onChange={(e)=> setlowercase(e.target.checked)} id='lowercase' />
            <label htmlFor="lowercase">Include LowerCase</label>
        </div>
        <div className={style.number}>
            <input type="checkbox" checked={numbervalue} onChange={(e)=> setnumber(e.target.checked)} id='number' />
            <label htmlFor="number">Include Numbers</label>
        </div>
        <div className={style.symbols}>
            <input type="checkbox" checked={symbolsvalue} onChange={(e)=> setsymbols(e.target.checked)} id='symbols' />
            <label htmlFor="symbols">Include Symbols</label>
        </div>
      </div>
      <button onClick={generatePassword}>Generator Password</button>
    </div>
  )
}
