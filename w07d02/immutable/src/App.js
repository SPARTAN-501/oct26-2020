import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import ViewCounter from './components/ViewCounter';
import Pizza from './components/Pizza';

const App = () => {
  const [heading, setHeading] = useState('Pat\'s Pizza Place');

  return (
    <div className="App">
      <Header heading={heading} moreStuff="yet more" />
      <Pizza />
      <ViewCounter />
    </div>
  );
};

export default App;
