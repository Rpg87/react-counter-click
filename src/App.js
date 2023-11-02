
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Logo from './images/logo.png';

function App() {

  const [numClicks, setnumClicks] = useState(0)



  const handleClick = () => {
    setnumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setnumClicks(0);
  }


  return (
    <div className='App'>
      <div className='container-logo'>
        <a href="https://www.linkedin.com/in/raquel-pe-go/" target='_blank'>
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
    </div>
  );
}

export default App;
