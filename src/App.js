
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Logo from './images/logo.png';

function App() {

  const [numClicks, setnumClicks] = useState(0);
  const [message, setMessage] = useState('');



  const handleClick = () => {
    setnumClicks(numClicks + 1);


    if (numClicks + 1 === 10) {
      setMessage('Has hecho click diez veces. ¡Genial!')
    } else if (numClicks + 1 === 15) {
      setMessage('15 ya, está bien, te dejo a tu rollo')
    } else if (numClicks + 1 === 25) {
      setMessage('¿No tienes ganas de ir al baño ?')
    } else if (numClicks + 1 === 50) {
      setMessage('Creo que necesitas un hobby')
    } else if (numClicks + 1 === 100) {
      setMessage('Tu familia está preocupada por ti')
    } else if (numClicks + 1 === 150) {
      setMessage('Desde aquí es un viaje en solitoria')
    } else {
      setMessage('')
    }

  }

  const resetCounter = () => {
    setnumClicks(0);
  }




  return (
    <div className='App'>
      <div className='container-logo'>
        <a href="https://www.linkedin.com/in/raquel-pe-go/" target='_blank'
          rel='noreferrer'>
          <img className='raquel-logo'
            src={Logo}
            alt='Logo de Raquel' />
        </a>

      </div>

      <div className='container-click'>
        <Counter
          numClicks={numClicks}
        />
        <Button
          text='Click'
          clickButton={true}
          event={handleClick}
        />
        <Button
          text='Reset'
          clickButton={false}
          event={resetCounter} />

      </div>

      <div className='message'> {message} </div>


    </div>
  );
}

export default App;
