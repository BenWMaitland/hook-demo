import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UseStates from './useStates';
import UseEffects from './useEffects';
import UseStateArray from './useStateArray';

ReactDOM.render(
  <React.StrictMode>
    <UseStates />
    {/* <UseEffects /> */}
    {/* <UseStateArray /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
