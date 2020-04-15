import React from 'react';

import './global.css';

import Routes from './routes';


function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
