import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Counter/Header';
import CounterValue from './Component/Counter/CounterValue';
import Buttons from './Component/Counter/Buttons';
import { useSelector } from 'react-redux';
import Private from './Component/Counter/Private';


export default function App() {
    const privacyValue = useSelector(store => store.privacy);
  return (
    <div className='card text-center p-4'>
        <Header/>
        { privacyValue ? <CounterValue/> : <Private/>}
        <Buttons/>
    </div>
  );
}
