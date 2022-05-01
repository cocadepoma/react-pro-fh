import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyLabel } from 'frs-my-sb-components';

function App() {
  return (
    <div className="App App-header">
      <MyLabel label='Hola Mundo' color='primary' size='h1' />
    </div>
  );
}

export default App;
