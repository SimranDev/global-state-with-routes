import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import './index.css';
import Routes from './routes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-red-500">
      <Routes />
    </div>
  );
}

export default App;
