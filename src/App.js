
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Logo from './images/logo.png';

function App() {

  const handleClick = () => {
    console.log('click');
  }

  const resetCounter = () => {
    console.log('reset');
  }


  return (
    <div className='App'>
      <div className='container-logo'>
        <img className='raquel-logo'
          src={Logo}
          alt='Logo de Raquel' />
      </div>

      <div className='container-click'>
        <Counter
          numClicks='5'
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
