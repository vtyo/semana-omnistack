import React from 'react';

import './global.css';

import Logon from './pages/Logon';


function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <Logon />
    </div>
  );
}

export default App;
